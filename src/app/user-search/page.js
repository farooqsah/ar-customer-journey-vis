'use client';

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const removeEmptyValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v != null && v !== '')
  );
};

const UserSearch = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    const enteredData = removeEmptyValues(data);

    if (Object.keys(enteredData).length === 0) {
      setErrorMessage('Please enter at least one search field');
      return;
    }

    setErrorMessage(''); // Clear any previous error messages

    // Navigate to the next page with form data as query parameters
    router.push(`/?${new URLSearchParams(enteredData).toString()}`);
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
        {errorMessage && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {errorMessage}
          </Typography>
        )}
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

export default UserSearch;
