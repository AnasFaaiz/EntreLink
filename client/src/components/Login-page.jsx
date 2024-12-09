import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import BackGround from './Background';

function LoginPage() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className="page-container">
            <BackGround/>
            <div className="login-container">
                <div className="login-box">
                    <div className="auth-buttons">
                        <button className="auth-btn" onClick={handleSignUpClick}>Sign Up</button>
                        <div className="vertical-line"></div>
                        <button className="auth-btn">Login</button>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password"/>
                        </div>
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
