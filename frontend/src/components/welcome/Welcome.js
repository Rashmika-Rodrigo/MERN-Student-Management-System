import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome To<br></br>Student Management System</h1>
      <button className="welcome-button" onClick={() => navigate('/login')}>Continue</button>
    </div>
  );
}

export default Welcome;
