import React from 'react';
import './../Dashboard.css';
import { Link } from 'react-router-dom';


const dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Wellmeadows Hospital</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <Link to ="Patient">
            <li>Patient</li>
          </Link>
          <li>Staff</li>
          <li>Wards</li>
          <li>Supply</li>
          <li>Prescription</li>
          <li>Other</li>
          <li>Settings</li>
        </ul>
        <div className="logout">
            <Link to='/'>
                <button>Log Out</button>
            </Link>
        </div>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <input type="text" placeholder="Search Here" className="search-bar" />
          <div className="user-info">
            <span><bold>Moira</bold></span>
            <span>Charge Nurse</span>
          </div>
            
          
        </header>
        <div className="dashboard-grid">
          <div className="dashboard-item">Patient</div>
          <div className="dashboard-item">Staff</div>
          <div className="dashboard-item">Wards</div>
          <div className="dashboard-item">Supply</div>
          <div className="dashboard-item">Prescription</div>
          <div className="dashboard-item">Other</div>
        </div>
      </main>
    </div>
  );
}

export default dashboard;
