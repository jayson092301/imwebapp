import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Container, Grid, Paper, Typography, styled } from '@mui/material'; 
import { supabase } from '../supabaseClient';

const ColoredPaper = styled(Paper)({
  backgroundColor: '#f0f0f0', 
  padding: '20px', 
  borderBottomRightRadius: '50px', 
  borderTopLeftRadius: '50px'
});


const WelcomeDashboard = () => {
    const [totalPatients, setTotalPatients] = useState(0);
    const [totalInpatients, setTotalInpatients] = useState(0);
    const [totalStaff, setTotalStaff] = useState(0);
    const [totalLocalDoctors, setTotalLocalDoctors] = useState(0);
    const [totalWards, setTotalWards] = useState(0);
    const [totalOutPatients, setTotalOutPatients] = useState(0);
  
    useEffect(() => {
      const fetchAnalyticsData = async () => {
        try {
          // Fetch total number of patients
          let { data: patients, error: patientsError } = await supabase
            .from('patient')
            .select('patient_number');
          if (patientsError) throw patientsError;
          setTotalPatients(patients.length);
  
          // Fetch total number of in-patients
          let { data: inPatients, error: inPatientsError } = await supabase
            .from('in_patient')
            .select('inpatient_id');
          if (inPatientsError) throw inPatientsError;
          setTotalInpatients(inPatients.length);
  
          // Fetch total number of out-patients
          let { data: outPatients, error: outPatientsError } = await supabase
            .from('out_patient')
            .select('patient_number');
          if (outPatientsError) throw outPatientsError;
          setTotalOutPatients(outPatients.length);
  
          // Fetch total number of staff members
          let { data: staff, error: staffError } = await supabase
            .from('staff')
            .select('staff_number');
          if (staffError) throw staffError;
          setTotalStaff(staff.length);
  
          // Fetch total number of wards
          let { data: wards, error: wardError } = await supabase
            .from('ward')
            .select('ward_number');
          if (wardError) throw wardError;
          setTotalWards(wards.length);
  
          // Fetch total number of local doctors
          let { data: localDoctors, error: localDoctorsError } = await supabase
            .from('localdoctor')
            .select('doctor_id');
          if (localDoctorsError) throw localDoctorsError;
          setTotalLocalDoctors(localDoctors.length);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchAnalyticsData();
    }, []);
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Wellmeadows Board
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Patients
              </Typography>
              <Typography variant="h4">{totalPatients}</Typography>
            </ColoredPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total In-Patients
              </Typography>
              <Typography variant="h4">{totalInpatients}</Typography>
            </ColoredPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Out-Patients
              </Typography>
              <Typography variant="h4">{totalOutPatients}</Typography>
            </ColoredPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Staff
              </Typography>
              <Typography variant="h4">{totalStaff}</Typography>
            </ColoredPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Local Doctors
              </Typography>
              <Typography variant="h4">{totalLocalDoctors}</Typography>
            </ColoredPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ColoredPaper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Wards
              </Typography>
              <Typography variant="h4">{totalWards}</Typography>
            </ColoredPaper>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default WelcomeDashboard;
  