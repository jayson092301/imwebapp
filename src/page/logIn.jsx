import React from 'react';
import './../App.css';
import userAvatar from './../../img/hospital.jpg'; // import your image
import TextField from '@mui/material/TextField';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

function logIn() {
  return (
    <div className="App" style={{backgroundImage: `url(${userAvatar})`}}>
      <header className="App-header">
        <h1>Welcome to Wellmeadows Hospital</h1>
        <div className="login-container">
          <div className="login-form">
            <div className="avatar">
                <LockPersonOutlinedIcon style={{ fontSize: 50.5 }} />
            </div>
            <form>
              <div className="input-container">
                <TextField required id="outlined-basic" label="Staff number" variant="outlined" /> 
              </div>
              <div className="input-container">
                <TextField required id="outlined-basic" label="Password" type= "password" variant="outlined" /> 
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <p>Not registered yet? <a href="#signup">Sign up here.</a></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default logIn;
