import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import colorPalette from '../colorPalette';
import { IoClose } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const chatContainerRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setMessages([{
            text: "Hello! I'm your EntreLink Business Assistant, an expert in entrepreneurship and business development. How can I help you with your business goals today?",
            sender: 'bot',
            timestamp: new Date().toISOString()
        }]);
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    if (!import.meta.env.VITE_GEMINI_API_KEY) {
        console.error('Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file');
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h3 style={styles.title}>EntreLink Assistant</h3>
                </div>
                <div style={styles.chatContainer}>
                    <div style={styles.botMessage}>
                        API key is missing. Please configure the chatbot properly.
                    </div>
                </div>
            </div>
        );
    };

    const SYSTEM_PROMPT = `You are an expert entrepreneurship advisor with extensive experience in business development, 
startups, and venture capital. Your role is to provide professional, practical advice on:

1. Business Development:
   - Business planning and strategy
   - Market analysis and validation
   - Growth strategies and scaling

2. Financial Aspects:
   - Funding and investment opportunities
   - Risk management
   - Financial planning

3. Operations & Innovation:
   - Innovation and product development
   - Marketing and customer acquisition
   - Legal and regulatory compliance
   - Team building and leadership

Please provide:
- Concise, actionable advice
- Real-world examples when relevant
- Clear step-by-step guidance
- Professional yet encouraging tone
- Realistic assessment of challenges`;


    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
        },
    });

    // useEffect(() => {
    //     if (chatContainerRef.current) {
    //         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //     }
    // }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = {
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        try {
            // Combine system prompt with user input as a single string
            const fullPrompt = `${SYSTEM_PROMPT}\n\nUser: ${inputMessage}`;
            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            const text = response.text();
            
            if (!text) {
                throw new Error('Empty response from AI');
            }

            const botMessage = {
                text: text,
                sender: 'bot',
                timestamp: new Date().toISOString()
            };
            
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = {
                text: `Error: ${error.message || 'Something went wrong. Please try again.'}`,
                sender: 'bot',
                timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
        <button 
            onClick={toggleChatbot}  // Note: using your existing toggleChatbot function
            style={styles.toggleButton}
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
            {isOpen ? <IoClose size={24} /> : <BsChatDots size={24} />}
        </button>

        {isOpen && (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h3 style={styles.title}>EntreLink Assistant</h3>
                </div>

                <div style={styles.chatContainer} ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.message,
                                ...(message.sender === 'user' ? styles.userMessage : styles.botMessage)
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                    {isTyping && (
                        <div style={styles.typingIndicator}>
                            Assistant is typing...
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} style={styles.inputContainer}>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        style={styles.input}
                    />
                    <button type="submit" style={styles.sendButton}>
                        Send
                    </button>
                </form>
            </div>
        )}
    </>
);
};  

const styles = {
    toggleButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 24px',
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
    },
    container: {
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '350px',
        height: '500px',
        backgroundColor: colorPalette.background.dark,
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 1000,
    },
    header: {
        padding: '15px',
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
    },
    title: {
        margin: 0,
        fontSize: '18px',
        fontWeight: '600',
    },
    chatContainer: {
        flex: 1,
        padding: '15px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        msOverflowStyle: 'none', 
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { // Webkit scrollbar style
            display: 'none'
        }
    },
    message: {
        padding: '10px 15px',
        borderRadius: '12px',
        maxWidth: '80%',
        wordWrap: 'break-word',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: colorPalette.background.light,
        color: colorPalette.text.light,
    },
    typingIndicator: {
        alignSelf: 'flex-start',
        color: colorPalette.text.muted,
        fontSize: '14px',
        padding: '5px 10px',
    },
    inputContainer: {
        padding: '15px',
        borderTop: `1px solid ${colorPalette.background.light}`,
        display: 'flex',
        gap: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '8px',
        border: `1px solid ${colorPalette.background.light}`,
        backgroundColor: colorPalette.background.main,
        color: colorPalette.text.light,
        outline: 'none',
    },
    sendButton: {
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: colorPalette.primary.dark,
        },
    },
};

export default Chatbot;