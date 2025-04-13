import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5050/api/signup', form);
      setMessage('Signup successful!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

<div className="password-wrapper">
  <input
    type={showPassword ? 'text' : 'password'}
    name="password"
    placeholder="Password"
    value={form.password}
    onChange={handleChange}
    required
  />
  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
    aria-label="Toggle password visibility"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>


        <label>
          Role:
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </label>

        <button type="submit">Sign Up</button>
      </form>

      {message && <p className="signup-message">{message}</p>}
    </div>
  );
};

export default Signup;
