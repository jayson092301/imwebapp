import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../dashboardstyle.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <div className="dashboard-icons">
          <Link to="patient">
            <div className="icon">
              <img src="../../img/patient.png" alt="Patient" />
              <p>Patient</p>
            </div>
          </Link>
          <Link to="staff">
            <div className="icon">
              <img src="../../img/staff.png" alt="Staff" />
              <p>Staff</p>
            </div>
          </Link>
          <Link to="wards">
            <div className="icon">
              <img src="../../img/ward.png" alt="Wards" />
              <p>Wards</p>
            </div>
          </Link>
          <Link to="supply">
            <div className="icon">
              <img src="../../img/supply.jpg" alt="Supply" />
              <p>Supply</p>
            </div>
          </Link>
          <Link to="prescription">
            <div className="icon">
              <img src="../../img/prescription.jpg" alt="Prescription" />
              <p>Prescription</p>
            </div>
          </Link>
          <Link to="other">
            <div className="icon">
              <img src="path_to_other_icon" alt="Other" />
              <p>Other</p>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
