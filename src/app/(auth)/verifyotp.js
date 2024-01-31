// material-ui

"use client";
import React, { useState } from "react";

import { Button, Grid, Paper, Stack, Typography } from "@mui/material";

// third-party
import OtpInput from "react18-input-otp";

// project import

// import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';

// ================================|| CODE VERIFICATION ||================================ //

const VerifyOtp = () => {
  const [otpValue, setOtpValue] = useState("");

  const handleOtpChange = (value) => {
    setOtpValue(value);
  };

  const handleValidate = () => {
    // Perform validation logic with otpValue
    console.log("Validating OTP:", otpValue);
  };

  return (
    <Paper>
      <Grid
        container
        spacing={3}
        style={{ width: "650px", marginLeft: "30%", padding: "20px" }}
      >
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6">
              Please enter the One-Time Password to verify your account
            </Typography>
            <Typography textAlign={"center"} style={{ color: "#535353" }}>
              A One-Time Password has been sent to 9574120036
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} style={{ padding: "35px 50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OtpInput
                value={otpValue}
                onChange={handleOtpChange}
                numInputs={6}
                containerStyle={{ justifyContent: "space-between" }}
                inputStyle={{
                  width: "100%",
                  margin: "8px",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid #000",
                  outline: "none",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="freehousing_button"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Validate
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Typography textAlign={"center"}>
                  Resend One-Time Password
                </Typography>
              </Stack>
              <Button style={{ color: "gray" }}>close</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VerifyOtp;
