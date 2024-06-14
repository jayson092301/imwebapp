import { Box, Paper, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React from 'react';
import '../dashboardstyle.css';
import ExpandableForm from './ExpandableForm'; // Import the ExpandableForm component

const Patient = () => {
  return (
    <div>
      <Paper elevation={3}>
        <div className="icon" style={{ display: 'flex' }}>
          <div style={{ margin: '8px' }}>
            <img src="../../img/patient.png" alt="Patient" />
          </div>
          <div>
            <h2 style={{ marginLeft: '10px' }}>Patient</h2>
          </div>
        </div>
      </Paper>
      <div>
        <Box>
        <ExpandableForm title="Patient Information">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Street" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Gender" variant="outlined" fullWidth select required>
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                  <MenuItem value="O">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="City" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone" type="tel" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Postal Code" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="NIN" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="State" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Date of Birth" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Marital Status</InputLabel>
                  <Select label="Marital Status" required>
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="married">Married</MenuItem>
                    <MenuItem value="divorced">Divorced</MenuItem>
                    <MenuItem value="civil_union">Civil Union</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Box>
          </ExpandableForm>

          <ExpandableForm title="Next of Kin Details">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Full Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Relationship" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Address" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" type="tel" variant="outlined" fullWidth required />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </Box>
          </ExpandableForm>

          <ExpandableForm title="Local Doctor Referrals">
          <FormControl fullWidth variant="outlined" required>
      <InputLabel id="local-doctor-select-label">Select Local Doctor</InputLabel>
      <Select
        labelId="local-doctor-select-label"
        id="local-doctor-select"
        label="Select Local Doctor"
      >
        <MenuItem value="doctor1">Doctor 1</MenuItem>
        <MenuItem value="doctor2">Doctor 2</MenuItem>
        <MenuItem value="doctor3">Doctor 3</MenuItem>
        <MenuItem value="doctor4">Doctor 4</MenuItem>
      </Select>
    </FormControl>
            <Box sx={{ mt: 2, textAlign: 'center' }}  >
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Box>
          </ExpandableForm>

          <ExpandableForm title="Appointment">
            <TextField label="Name" variant="outlined" required />
            <TextField label="Relationship" variant="outlined" required />
            <TextField label="Address" variant="outlined" required />
            <TextField label="Phone" type="tel" variant="outlined" required />
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </ExpandableForm>
        </Box>
      </div>
    </div>
  );
};

export default Patient;
