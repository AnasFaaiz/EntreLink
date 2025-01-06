import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import BackGround from './Background';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUpClick = () => {
        navigate('/');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        navigate('/homepage');

        // // Here, you would typically handle form submission (API call, validation, etc.)
        // // For now, we'll just log the username and password
        // console.log('Username:', username);
        // console.log('Password:', password);

        // // If the login fails, you could display an error message like this:
        // if (username === "" || password === "") {
        //     setError("Both fields are required.");
        // } else {
        //     setError(""); // Clear any previous errors
        //     // Navigate to the dashboard or another page after successful login
        //     // Example: navigate('/dashboard');
        // }
    };

    return (
        <div className="page-container">
            <BackGround />
            <div className="login-container">
                <div className="login-box">
                    <div className="auth-buttons">
                        <button className="auth-btn" onClick={handleSignUpClick}>Sign Up</button>
                        <div className="vertical-line"></div>
                        <button className="auth-btn">Login</button>
                    </div>
                    <form onSubmit={handleLoginSubmit}>
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
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <div className="forgot-links">
                        <a href="/forgot-username" className="forgot-link">Forgot Username?</a>
                        <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
