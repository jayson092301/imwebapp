import { Box, Paper } from '@mui/material';
import React from 'react';
import '../dashboardstyle.css';

const Patient = () => {
  return (
    <div>
      <Paper elevation={3}>
      <div className="icon" style={{display:'flex'}}>
        <div style={{margin:'8px'}}>
          <img src="../../img/patient.png" alt="Patient" />
        </div>
        <div>
          <h2 style={{marginLeft:'10px'}}>Patient</h2>
        </div>
        
      </div>
      </Paper>
      <div>
      </div>
      {/* Patient content goes here */}
    </div>
  );
};

export default Patient;
