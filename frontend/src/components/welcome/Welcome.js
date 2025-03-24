import React from "react";
import { useNavigate } from "react-router-dom";
import welcomeImage from "../assets/welcome-image.png";
import { FaGraduationCap, FaEdit, FaEraser, FaUserPlus } from "react-icons/fa";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <div className="welcome-content">
          <img className="welcome-img" src={welcomeImage} alt="Welcome" />
          <h1 className="welcome-title">
            Welcome To
            <br />
            Student Management System
          </h1>
          <p className="welcome-subtitle">
            Streamline student administration with our comprehensive solution
          </p>
          <button className="welcome-button" onClick={() => navigate("/login")}>
            Continue
          </button>
        </div>

        <div className="welcome-features">
          <h2>System Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="icon-container">
                <FaUserPlus className="feature-icon" />
              </div>
              <h3>Add Student Records</h3>
              <p>
                Insert new student records to the system and store them safely
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <FaEdit className="feature-icon" />
              </div>
              <h3>Update Student Records</h3>
              <p>Update existing student details easily</p>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <FaEraser className="feature-icon" />
              </div>
              <h3>Delete Student Records</h3>
              <p>Delete student records easily and Securely</p>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <FaGraduationCap className="feature-icon" />
              </div>
              <h3>View All Student Records</h3>
              <p>Easily view all existing student details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              Our student management system is designed to simplify
              administrative tasks for educational institutions. Recommended to access through a PC.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: wdrrrodrigo@gmail.com</p>
            <p>Phone: (+94) 77 521 421 7</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Admin Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register");
                  }}
                >
                  Create New Admin Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Student Management System by
            W.D.R. Rashmika Rodrigo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
