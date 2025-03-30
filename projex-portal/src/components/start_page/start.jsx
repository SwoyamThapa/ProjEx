import React from 'react';
import './start.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-header">
        <h1>ProjEx</h1>
      </header>

      <main className="home-main">
        <h2>Welcome to the Student Project Showcase Platform</h2>
        <p>
          ProjEx lets students create stunning project portfolios and gives professors an easy way to review and give feedback. Choose your portal to begin:
        </p>
        <div className="btn-container">
          <button className="btn" onClick={() => navigate('/student-login')}>Student Portal</button>
          <button className="btn" onClick={() => navigate('/professor-login')}>Professor Portal</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
