import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Nav from "../nav/Nav";

function AllStudents() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => setStudents(res.data.students));
  }, []);

  const deleteStudent = async (id) => {

    const Confirmation = window.confirm(
      "Are you sure you want to delete this Student?"
    );

    if (Confirmation) {
      try{
        await axios.delete(`http://localhost:5000/students/${id}`);
        setStudents(students.filter((s) => s._id !== id));
        window.alert("Student deleted successfully!");
      }
      catch (err) {
        console.error("Error deleting Student", err);
      }
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
      <h2>All Students</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.studentID}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.mobile}</td>
              <td>{s.address}</td>
              <td>
                <button className="update-btn" onClick={() => navigate(`/updateStudent/${s._id}`)}>Update</button> <br></br>
                <button className="delete-btn" onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllStudents;