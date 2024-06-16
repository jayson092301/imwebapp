import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../dashboardstyle.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import img from '../../img/user.png';
import ProfileDialog from './ProfileDialog'; // Ensure this path is correct

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Moira",
    lastName: "Samuel",
    email: "Samuel@gmail.com",
    password: "********",
    accessLevel: "Charge Nurse",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <div className="header-right">
              <div className="search-profile-container">
                <div className="search-bar-container" style={{ textAlign: 'center', marginLeft: '270px', marginRight: '0px' }}>
                  <TextField
                    id="outlined-basic"
                    label="Search Patient"
                    variant="outlined"
                    size="small"
                    className="search-bar"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="profile-container" style={{ marginLeft: '300px' }} onClick={handleClickOpen}>
                  <Avatar alt={profile.firstName} src={img} className="profile-avatar" />
                  <span className="profile-name">{profile.firstName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <img src="../../img/supply.png" alt="Supply" />
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
              <img src="../../img/other.png" alt="Other" />
              <p>Other</p>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
      <ProfileDialog open={open} handleClose={handleClose} profileData={profile} onSave={handleSave} />
    </div>
  );
};

export default Dashboard;
