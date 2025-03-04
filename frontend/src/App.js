import { Route, Routes } from 'react-router-dom'; 
import React from 'react';
import Welcome from './components/welcome/Welcome';
import Login from './components/adminLogin/Login';
import Register from './components/adminLogin/Register';
import Home from "./components/home/Home";
import AddStudent from "./components/create/AddStudent";
import AllStudents from "./components/read/AllStudents";
import UpdateStudent from "./components/update/UpdateStudent";
import "./App.css"; 

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/allStudents" element={<AllStudents />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;