import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./nav.css";

function Nav() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const initiateLogout = () => {
    // Show confirmation dialog first
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    // Hide confirmation dialog
    setShowConfirmation(false);
    // Start loading process
    setIsLoading(true);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        navigate('/welcome'); // Navigate to Welcome.js after loading completes
      }
    }, 500); // Update every second for 5 seconds total
  };

  const cancelLogout = () => {
    // Hide confirmation dialog
    setShowConfirmation(false);
  };

  return (
    <div>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link to="/home" className='nav-link'>
            <h1>Home</h1>
          </Link>
        </li>
        <li className='nav-li'>
          <Link to="/addStudent" className='nav-link'>
            <h1>Add Student</h1>
          </Link>
        </li>
        <li className='nav-li'>
          <Link to="/allStudents" className='nav-link'>
            <h1>All Students</h1>
          </Link>
        </li>
        <li className='nav-li'>
          <button className='logout-btn' onClick={initiateLogout}>Logout</button>
        </li>
      </ul>
      
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-dialog">
            <h3>Are you sure?</h3>
            <p>You want to Logout?</p>
            <div className="confirmation-buttons">
              <button className="confirm-btn" onClick={confirmLogout}>Yes</button>
              <button className="cancel-btn" onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-container">
            <h2>Logging out...</h2>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p>{loadingProgress}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;