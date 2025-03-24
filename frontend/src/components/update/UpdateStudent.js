import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";

function UpdateStudent() {
  const { id } = useParams(); // Get student ID from URL
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    studentID: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  // Fetch student data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/${id}`)
      .then((res) => {
        console.log("Fetched data:", res.data); 
        const studentData = res.data.students;
        setInputs({
          studentID: studentData.studentID,
          name: studentData.name,
          email: studentData.email,
          mobile: studentData.mobile,
          address: studentData.address,
        });
      })
      .catch((err) => console.error("Error fetching student data:", err));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit update request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/students/${id}`, inputs);
      navigate("/allStudents"); // Redirect after update
    } catch (err) {
      console.error("Error updating student data:", err);
    }
  };

  // Show "Loading data..." until data is fetched
  if (!inputs.studentID) return <h2>Loading data...</h2>;

  return (
    <div>
      <Nav />
      <div className="add-student-container">
        <h1 className="page-title">Update Student</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentID"
            value={inputs.studentID}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            value={inputs.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            required
          />
          <button className="update-btn-2" type="submit">
            Update
          </button>
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

export default UpdateStudent;
