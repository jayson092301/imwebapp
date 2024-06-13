import React from 'react';
import { Paper } from '@mui/material';

const Prescription = () => {
  return (
    <div>
      <Paper elevation={3}>
        <h2 style={{padding:'10px'}}>Prescription</h2>
      </Paper>
      {/* Patient content goes here */}
    </div>
  );
};

export default Prescription;
