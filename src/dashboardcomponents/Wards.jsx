import React from 'react';
import { Paper } from '@mui/material';

const Wards = () => {
  return (
    <div>
      <Paper elevation={3}>
      <div className="icon" style={{display:'flex'}}>
        <div style={{margin:'8px'}}>
          <img src="../../img/ward.png" alt="Ward" />
        </div>
        <div>
          <h2 style={{marginLeft:'10px'}}>Wards</h2>
        </div>
        
      </div>
      </Paper>
      {/* Patient content goes here */}
    </div>
  );
};

export default Wards;
