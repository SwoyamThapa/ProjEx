import React from 'react';
import './ProfessorLogin.css';
import loginIllustration from '../assets/login_img.png';

const ProfessorLogin = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="form-box">
          <h2>Login</h2>
          <p>Enter your account details</p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="button" className="forgot">Forgot Password?</button>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="signup-section">
            <span>Don't have an account?</span>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="welcome-overlay">
          <h1 className="welcome-title">Welcome to<br /><span className="highlight">professor portal</span></h1>
          <p className="welcome-sub">Login to manage and review projects</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorLogin;
