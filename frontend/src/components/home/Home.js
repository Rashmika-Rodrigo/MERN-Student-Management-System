import React from "react";
import Nav from "../nav/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <div className="hero-section">
          <h1>Student Management System</h1>
          <p className="tagline">
            Streamline student administration with our comprehensive solution
          </p>
        </div>

        <div className="features-section">
          <h2>Welcome to Admin Dashboard</h2>
          <p>
            Manage student information, and streamline administrative tasks all
            in one place.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Student Records</h3>
              <p>
                Maintain student profiles with complete details.
              </p>
            </div>

            <div className="feature-card">
              <h3>Quick Access</h3>
              <p>
                Navigate easily between adding new students, viewing all
                students, and Updating or Deleting individual students.
              </p>
            </div>

            <div className="feature-card">
              <h3>Efficient Administration</h3>
              <p>
                Simplify administrative tasks with centralized data management.
              </p>
            </div>
          </div>
        </div>

        <div className="getting-started">
          <h2>Getting Started</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Add Students</h3>
                <p>Create new student profiles with our easy-to-use form.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>View All Students</h3>
                <p>
                  Access the complete students list recorded in the database.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Manage Student Details</h3>
                <p>
                  Update information, Delete student records, and generate
                  reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="home-footer">
          <p>
            © 2025 Student Management System by W.D.R. Rashmika Rodrigo. All
            rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
