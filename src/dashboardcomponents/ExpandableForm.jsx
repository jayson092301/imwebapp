import { Box, Paper, Button, TextField, Collapse, Typography } from '@mui/material';
import React, { useState } from 'react';

const ExpandableForm = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'left', mt: 2 }}>
      <Paper elevation={1} onClick={toggleForm} sx={{ cursor: 'pointer', p: 2 }}>
        <Typography variant="p">
          {isExpanded ? `Hide ${title}` : title}
        </Typography>
      </Paper>
      <Collapse in={isExpanded}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableForm;
