import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";

function nav() {
  return (
    <div>
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link to = "/home" className='nav-link'>
                    <h1>Home</h1>
                </Link>
            </li>
            <li className='nav-li'>
                <Link to = "/addStudent" className='nav-link'>
                    <h1>Add Student</h1>
                </Link>
            </li>
            <li className='nav-li'>
            <Link to = "/allStudents" className='nav-link'>
                <h1>All Students</h1>
            </Link>
            </li>
            <li className='nav-li'>
                <button className='logout-btn'>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default nav