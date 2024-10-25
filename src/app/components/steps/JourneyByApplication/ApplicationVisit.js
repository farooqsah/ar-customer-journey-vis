'use client';

import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel } from '@mui/material';
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
              
              <Link href="/aggregate-visualizer">{step}</Link>
            </StepLabel>
        
          </Step>
        ))}
      </Stepper>

      </Box>
    </Box>
  );
};

export default ApplicationVisit;
