import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";

function UpdateStudent() {
  const { id } = useParams(); // Get student ID from URL
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(null); // Initially null to prevent errors

  // Fetch student data
  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then((res) => setInputs(res.data))
      .catch((err) => console.error("Error fetching student data:", err));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Submit update request
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/students/${id}`, inputs);
    navigate("/allStudents"); // Redirect after update
  };

  // Show "Loading..." until data is fetched
  if (!inputs) return <h2>Loading...</h2>;

  return (
    <div>
      <Nav />
      <div className="container">
      <h1>Update Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentID" value={inputs.studentID || ""} onChange={handleChange} required />
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} required />
        <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} required />
        <input type="text" name="mobile" value={inputs.mobile || ""} onChange={handleChange} required />
        <input type="text" name="address" value={inputs.address || ""} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}

export default UpdateStudent;
