import React from 'react';
import { Paper } from '@mui/material';
const Staff = () => {
  return (
    <div>
      <Paper elevation={3}>
      <div className="icon" style={{display:'flex'}}>
        <div style={{margin:'8px'}}>
          <img src="../../img/staff.png" alt="Staff" />
        </div>
        <div>
          <h2 style={{marginLeft:'10px'}}>Staff</h2>
        </div>
        
      </div>
      </Paper>
      {/* Patient content goes here */}
    </div>
  );
};

export default Staff;
