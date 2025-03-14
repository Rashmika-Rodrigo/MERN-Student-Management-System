import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../nav/Nav";

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    studentID: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/students", student);
    window.alert("Student added successfully!")
    navigate("/allStudents");
  };

  return (
    <div>
      <Nav />
      <div className="add-student-container">
      <h2 className="page-title">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentID" placeholder="Student ID" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <button className="add-button" type="submit">Add</button>
      </form>
    </div>
    </div>
  );
}

export default AddStudent;