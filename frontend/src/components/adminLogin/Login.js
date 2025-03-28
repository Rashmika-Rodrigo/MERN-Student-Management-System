import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok") {
        alert("Login successful");
        navigate("/home");
      } else {
        alert("Incorrect username or password !");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendRequest = async (e) => {
    return await axios
      .post("http://localhost:5000/login", {
        username: user.username,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <div className="auth-container">
        <div className="icon-container">
          <FaLock className="feature-icon" />
        </div>
        <h2 className="auth-header">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            required
          />
          <button className="auth-button" type="submit">
            Login
          </button>
          <Link to="/register" className="auth-link">
            <p>Create new account</p>
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

export default Login;
