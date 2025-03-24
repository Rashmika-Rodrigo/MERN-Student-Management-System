import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/register", user);
    window.alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div>
      <div className="auth-container">
        <div className="icon-container">
          <FaLock className="feature-icon" />
        </div>
        <h2 className="auth-header">Create Admin Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="password"
            name="repassword"
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />
          <button className="auth-button" type="submit">
            Create
          </button>
          <Link to="/login" className="auth-link">
            <p>Already have an account? Login</p>
          </Link>
        </form>
      </div>
      <footer className="home-footer">
        <p>
          © 2025 Student Management System by W.D.R. Rashmika Rodrigo. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Register;
