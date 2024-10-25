'use client'

import { Box, Typography, Stepper, Step, StepLabel, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import {  useState } from 'react'
import { getDataSource } from './const-heatmap-data';
import CustomizedDialogs from './CustomizedDialogs'
import HeatMap from './HeatMap'

const ApplicationVisit = props => {

    const [ heatmapData, setHeatmapData ] = useState( getDataSource() );

   const handleInputChange = event => {
    event.persist();
    console.log('handleInputChange:::::', event.target)
    setHeatmapData(getDataSource(event.target.value));
   }
  return (
    <Box
    //   alignItems="center"
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
      minHeight="100vh"
      padding={ 5 }
    >
      <Typography
        gutterBottom
        variant="h4"
      >
        Customer Journey By app
      </Typography>

      <Box sx={ { maxWidth: 700 } }>

        <Stepper >
          { props.steps.map( ( step, index ) => (
            <Step
              active = { true }
              key={ index }
            >
              <StepLabel >

                <Button
                  href="/aggregate-visualizer"
                  variant="contained"
                >{ step } &gt;
                </Button>
              </StepLabel>

            </Step>
          ) ) }
        </Stepper>
        
      </Box>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
         onChange={handleInputChange}
      >
         <FormControlLabel value="basic" control={<Radio />} label="default" />
        <FormControlLabel value="heatmapData_DREnrolled" control={<Radio />} label="DREnrolled" />
        <FormControlLabel value="heatmapData_DRInactive" control={<Radio />} label="DRInactive" />
        <FormControlLabel value="heatmapData_PLEnrolled" control={<Radio />} label="PLEnrolled" />
         <FormControlLabel value="heatmapData_DREnrolledStraight" control={<Radio />} label="DREnrolledStraight" />
        
      </RadioGroup>
       <CustomizedDialogs imageSrc = "/images/debtReleaf.png" label="Where they are coming from " title="Google /Facebook ads" />
      <CustomizedDialogs imageSrc = "/images/APLhome.png" label="What they have seen from us"  title="APL Home"  />
      
      <HeatMap heatmapData = { heatmapData} />
    </Box>
  )
}

export default ApplicationVisit
