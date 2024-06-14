import { Box, Paper, Button, TextField } from '@mui/material';
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
            <TextField label="Name" variant="outlined" required />
            <TextField label="Age" type="number" variant="outlined" required />
            <TextField label="Address" variant="outlined" required />
            <TextField label="Phone" type="tel" variant="outlined" required />
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </ExpandableForm>

          <ExpandableForm title="Next of Kin Details">
            <TextField label="Name" variant="outlined" required />
            <TextField label="Relationship" variant="outlined" required />
            <TextField label="Address" variant="outlined" required />
            <TextField label="Phone" type="tel" variant="outlined" required />
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          </ExpandableForm>

          <ExpandableForm title="Local Doctor Referrals">
            <TextField label="Name" variant="outlined" required />
            <TextField label="Relationship" variant="outlined" required />
            <TextField label="Address" variant="outlined" required />
            <TextField label="Phone" type="tel" variant="outlined" required />
            <Button type="submit" variant="contained" color="secondary">
              Submit
            </Button>
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
