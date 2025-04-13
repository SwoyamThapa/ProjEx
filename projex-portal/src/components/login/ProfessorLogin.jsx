import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfessorLogin.css';
import loginIllustration from '../assets/login_img.png';

const ProfessorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5050/api/login', { email, password });
      const { token, user } = res.data;

      if (user.role !== 'professor') {
        setMessage("Access denied. You are not a professor.");
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/professor-dashboard');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="form-box">
          <h2>Login</h2>
          <p>Enter your account details</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="forgot">Forgot Password?</button>
            <button type="submit" className="login-btn">Login</button>
          </form>
          {message && <p className="login-error">{message}</p>}
          <div className="signup-section">
            <span>Don't have an account?</span>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Sign up</button>
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
