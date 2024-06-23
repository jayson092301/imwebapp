import React, { useState, useEffect } from 'react';
import { Box, Paper, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ExpandableForm from './ExpandableForm';
import { supabase } from '../supabaseClient'; // Your Supabase client setup

const Prescription = () => {
  const [prescriptionInfo, setPrescriptionInfo] = useState({
    patientId: '',
    drugId: '',
    startDate: '',
    endDate: '',
    unitsPerDay: 1,
  });

  const [patients, setPatients] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [administeredPrescriptions, setAdministeredPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase
        .from('patient')
        .select('patient_number, first_name, last_name');

      if (error) {
        console.error('Error fetching patients:', error);
      } else {
        setPatients(data);
      }
    };

    const fetchDrugs = async () => {
      const { data, error } = await supabase
        .from('pharmaceutical_supply')
        .select(`
          drug_number, 
          supply_id,
          supply (supply_name)
        `);

      if (error) {
        console.error('Error fetching drugs:', error);
      } else {
        // Flatten the data to include the supply_name directly in the drug object
        const flattenedData = data.map(drug => ({
          drug_number: drug.drug_number,
          supply_id: drug.supply_id,
          supply_name: drug.supply.supply_name
        }));
        setDrugs(flattenedData);
      }
    };

    fetchPatients();
    fetchDrugs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreatePrescriptionSubmit = async (e) => {
    e.preventDefault();
    const newPrescription = { ...prescriptionInfo };
    setAdministeredPrescriptions((prev) => [...prev, newPrescription]);
    
    // Insert new prescription to the database
    const { error } = await supabase
      .from('prescriptions')
      .insert(newPrescription);

    if (error) {
      console.error('Error creating prescription:', error);
    } else {
      // Clear input fields after submission
      setPrescriptionInfo({
        patientId: '',
        drugId: '',
        startDate: '',
        endDate: '',
        unitsPerDay: 1,
      });
    }
  };

  const handleAdministerSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('administered_prescriptions')
      .insert({ ...prescriptionInfo });

    if (error) {
      console.error('Error administering prescription:', error);
    } else {
      setAdministeredPrescriptions((prev) => [...prev, { ...prescriptionInfo }]);
    }
  };

  const formatPrescriptionDetails = () => {
    const { drugId, unitsPerDay, startDate, endDate } = prescriptionInfo;
    const drug = drugs.find(d => d.supply_id === drugId);
    if (drug && unitsPerDay && startDate && endDate) {
      return `Drug: ${drug.supply_name}, Units/Day: ${unitsPerDay}, Start Date: ${startDate}, End Date: ${endDate}`;
    } else {
      return "Please fill in all fields";
    }
  };

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
      <div style={{ margin: '15px' }}>
        <div style={{ textAlign: 'center' }}>
          <span><b>Patient</b></span>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Patient Name"
              variant="outlined"
              fullWidth
              select
              required
              size="small"
              name="patientId"
              value={prescriptionInfo.patientId}
              onChange={handleInputChange}
            >
              {patients.map(patient => (
                <MenuItem key={patient.patient_number} value={patient.patient_number}>
                  {`${patient.first_name} ${patient.last_name}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </div>
        <ExpandableForm title="Prescription Information">
          <form onSubmit={handleCreatePrescriptionSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Drug</InputLabel>
                  <Select
                    label="Drug"
                    name="drugId"
                    value={prescriptionInfo.drugId}
                    onChange={handleInputChange}
                    required
                  >
                    {drugs.map(drug => (
                      <MenuItem key={drug.supply_id} value={drug.supply_id}>
                        {`${drug.drug_number} - ${drug.supply_name}`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Start Date"
                  type="date"
                  name="startDate"
                  value={prescriptionInfo.startDate}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End Date"
                  type="date"
                  name="endDate"
                  value={prescriptionInfo.endDate}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Units Per Day"
                  type="number"
                  name="unitsPerDay"
                  value={prescriptionInfo.unitsPerDay}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  inputProps={{ min: 1 }} // Added to prevent negative values
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button type="submit" variant="contained" color="primary">
                    Create Prescription
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </ExpandableForm>
        <ExpandableForm title="Administer Prescription">
          <form onSubmit={handleAdministerSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Prescription Details"
                  value={formatPrescriptionDetails()}
                  variant="outlined"
                  fullWidth
                  size="small"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button type="submit" variant="contained" color="primary">
                    Administer Prescription
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </ExpandableForm>
        <ExpandableForm title="Prescription History">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Drug</TableCell>
                  <TableCell>Units/Day</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {administeredPrescriptions.map((prescription, index) => (
                  <TableRow key={index}>
                    <TableCell>{drugs.find(d => d.supply_id === prescription.drugId)?.supply_name}</TableCell>
                    <TableCell>{prescription.unitsPerDay}</TableCell>
                    <TableCell>{prescription.startDate}</TableCell>
                    <TableCell>{prescription.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpandableForm>
      </div>
    </div>
  );
};

export default Prescription;
