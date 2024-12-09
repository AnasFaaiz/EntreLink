import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackGround from './Background';
import "../App.css";

function SignUp() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="page-container">
            <BackGround/>
            <div className="signup-container">
                <div className="signup-box">
                    <div className="auth-buttons">
                        <button className="auth-btn">Sign Up</button>
                        <div className="vertical-line"></div>
                        <button className="auth-btn" onClick={handleLoginClick}>Login</button>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password"/>
                        </div>
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
