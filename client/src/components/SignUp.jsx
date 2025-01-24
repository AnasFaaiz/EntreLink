import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackGround from './Background';
import "../App.css";
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    
    // State hooks for the form fields and error message
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginClick = () => {
        navigate('/EntreLink');
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err)) 
    
        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }
    
        // try {
        //     // Make a POST request to the backend
        //     const response = await fetch("http://localhost:5175/api/auth/register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ username, email, password }),
        //     });
    
        //     const data = await response.json();
    
        //     if (response.ok) {
        //         alert(data.message); // Display success message
        //         navigate("/login"); // Redirect to login page
        //     } else {
        //         setError(data.message); // Display error from the backend
        //     }
        // } catch (err) {
        //     console.error(err);
        //     setError("Error connecting to the server.");
        // }
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
