import React from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from "../assets/welcome-image.png";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <img className="welcome-img" src={welcomeImage} alt="Welcome" />
      <h1 className="welcome-title">Welcome To<br />Student Management System</h1>
      <button className="welcome-button" onClick={() => navigate('/login')}>Continue</button>
    </div>
  );
}

export default Welcome;
