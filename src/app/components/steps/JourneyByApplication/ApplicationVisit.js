'use client';

import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import Link from 'next/link'
const ApplicationVisit = props => {
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={2}
    >
      <Typography variant="h4" gutterBottom>
        Customer Journey By app
      </Typography>
     
       <Box sx={{ maxWidth: 400 }}>
    
      <Stepper  orientation="vertical">
        {props.steps.map((step, index) => (
          <Step active = {true} key={index}>
            <StepLabel
    
            >
              
    
              <Button href="/aggregate-visualizer" variant="contained">{step} &gt; </Button>
            </StepLabel>
        
          </Step>
        ))}
      </Stepper>

      </Box>
    </Box>
  );
};

export default ApplicationVisit;
