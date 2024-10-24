'use client';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const CustomerJourney = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        Customer Journey
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Enter search data in a field below
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="400px"
      >
        {['visit_id', 'profile_id', 'email', 'phone'].map((fieldName) => (
          <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label={fieldName}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={{ marginTop: 2 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerJourney;
