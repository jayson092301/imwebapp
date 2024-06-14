import React from 'react';
import { Box, Paper, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const Prescription = () => {
  return (
    <div>
      <Paper elevation={3}>
        <div className="icon" style={{ display: 'flex' }}>
          <div style={{ margin: '8px' }}>
            <img src="../../img/prescription.jpg" alt="Prescription" />
          </div>
          <div>
            <h2 style={{ marginLeft: '10px' }}>Prescription</h2>
          </div>
        </div>
      </Paper>
        <div style={{ margin:'15px'}}>
          <div style={{textAlign:'center'}}>
          <span><b>In-Patient</b></span>
          </div>
          <div>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth variant="outlined" size='small'>
                <InputLabel>Patient Name</InputLabel>
                <Select label="Patient Name" required>
                  <MenuItem value="Name 1">Name 1</MenuItem>
                  <MenuItem value="Name 2">Name 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </div>
        </div>
      {/* Patient content goes here */}
    </div>
  );
};

export default Prescription;
