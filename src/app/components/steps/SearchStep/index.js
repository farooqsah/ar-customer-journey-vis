"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { removeEmptyValues } from "./helpers";

const SearchStep = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [individualErrorMessage, setIndividualErrorMessage] = useState("");
  const [groupErrorMessage, setGroupErrorMessage] = useState("");

  const onSubmitIndividual = (data) => {
    const enteredData = removeEmptyValues(data);

    if (Object.keys(enteredData).length === 0) {
      setIndividualErrorMessage("Please enter at least one search field");
      return;
    }

    setIndividualErrorMessage(""); // Clear any previous error messages

    // Navigate to the next page with form data as query parameters
    router.push(
      `/visitor-session?${new URLSearchParams(enteredData).toString()}`
    );
  };

  const onSubmitGroup = (data) => {
    const enteredData = removeEmptyValues(data);

    if (Object.keys(enteredData).length === 0) {
      setGroupErrorMessage("Please enter at least one search field");
      return;
    }

    setGroupErrorMessage(""); // Clear any previous error messages

    // Navigate to the next page with form data as query parameters
    router.push(
      `/aggregate-visualizer?${new URLSearchParams(enteredData).toString()}`
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="680px"
      padding={2}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontFamily={"var(--font-ultramarine)"}
        fontWeight={700}
      >
        Customer Journey
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        width="75vw"
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitIndividual)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="400px"
        >
          <Typography
            variant="h6"
            fontFamily={"var(--font-ultramarine)"}
            fontWeight={500}
          >
            Individual Search
          </Typography>
          <Typography
            variant="h7"
            fontFamily={"var(--font-ultramarine)"}
            sx={{ marginBottom: 2, fontSize: "14px" }}
          >
            Visualize the Journey path of a specific user
          </Typography>
          {["visit_id", "profile_id", "email", "phone"].map((fieldName) => (
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
          {individualErrorMessage && (
            <Typography
              color="error"
              variant="body2"
              sx={{ marginTop: 1 }}
              fontFamily={"var(--font-ultramarine)"}
            >
              {individualErrorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            sx={{ marginTop: 2 }}
            fontFamily={"var(--font-ultramarine)"}
          >
            Search
          </Button>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitGroup)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="400px"
        >
          <Typography variant="h6" fontFamily={"var(--font-ultramarine)"}>
            Group Search
          </Typography>
          <Typography
            sx={{ marginBottom: 2, fontSize: "14px" }}
            fontFamily={"var(--font-ultramarine)"}
          >
            Visualize the Journey by a Segment, Partner, or Campaign
          </Typography>
          {["utm_source", "utm_adcampaign", "origin", "date"].map(
            (fieldName) => (
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
            )
          )}
          {groupErrorMessage && (
            <Typography
              color="error"
              variant="body2"
              sx={{ marginTop: 1 }}
              fontFamily={"var(--font-ultramarine)"}
            >
              {groupErrorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            sx={{ marginTop: 2 }}
            fontFamily={"var(--font-ultramarine)"}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchStep;
