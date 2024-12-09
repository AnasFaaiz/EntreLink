import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackGround from './Background';
import "../App.css";

function SignUp() {
    const navigate = useNavigate();
    
    // State hooks for the form fields and error message
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        // Validate the inputs
        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }

        // Here you would typically send the form data to your backend API
        // For now, let's log the form data
        console.log("SignUp Data:", { username, email, password });

        // Clear the error and continue with the successful registration process
        setError(""); // Clear any previous errors
        // Example: Navigate to another page after successful sign-up
        // navigate('/welcome');
    };

    return (
        <div className="page-container">
            <BackGround />
            <div className="signup-container">
                <div className="signup-box">
                    <div className="auth-buttons">
                        <button className="auth-btn">Sign Up</button>
                        <div className="vertical-line"></div>
                        <button className="auth-btn" onClick={handleLoginClick}>Login</button>
                    </div>
                    <form onSubmit={handleSignUpSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input 
                                type="text" 
                                id="username" 
                                placeholder="Enter your username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    <div className="social-login">
                        <p>Or sign up using:</p>
                        <div className="social-buttons">
                            <button className="social-btn google-btn">Google</button>
                            <button className="social-btn github-btn">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
