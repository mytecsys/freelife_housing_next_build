"use client";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import loginimage from "../loginRegister.png";
import logo from "../../logo11.png";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";
import VerifyOtp from "../verifyotp";

export default function Register() {
  const router = useRouter();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <Image
              src={loginimage}
              style={{ width: "100%", height: "100%", position: "relative" }}
            />
            <Image
              src={logo}
              style={{ position: "absolute", left: "15px", top: "15px" }}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Paper style={{ padding: "20px" }}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Typography mr={3}>Already have an account</Typography>
                <Button
                  variant="contained"
                  className="freehousing_button"
                  onClick={() => router.push("/loginpage")}
                >
                  Login
                </Button>
              </Box>
              <Box style={{ padding: "35px 85px" }}>
                <Typography variant="h5" fontWeight={600}>
                  Welcome to Real Estate!
                </Typography>
                <Typography color={"#8E8E8E"}>Register your account</Typography>

                <Box style={{ marginTop: "20px" }}>
                  <div className="loginregwrap">
                    <label className="loginreglabel">Full Name</label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="loginRegInput"
                    />
                  </div>
                  <div className="loginregwrap">
                    <label className="loginreglabel">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      placeholder="Enter your email id"
                      className="loginRegInput"
                    />
                  </div>

                  <div className="loginregwrap">
                    <label className="loginreglabel">Mobile Number</label>
                    <input
                      type="number"
                      id="mobno"
                      name="mobno"
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="loginRegInput"
                    />
                  </div>
                  <div className="loginregwrap">
                    <label className="loginreglabel">Password</label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      onChange={handleInputChange}
                      placeholder="Set your password for account"
                      className="loginRegInput"
                    />
                  </div>
                  <div className="loginregwrap">
                    <label>Gender</label>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </div>

                  <Button
                    variant="contained"
                    className="freehousing_button"
                    style={{
                      textTransform: "none",
                      width: "100%",
                      margin: "15px 0",
                    }}
                  >
                    Continue
                  </Button>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <div className="logindivborder"></div>
                    <span style={{ padding: "10px" }}>OR</span>
                    <div className="logindivborder"></div>
                  </Box>
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.5 12.7777C24.5 11.7499 24.4166 10.9999 24.2361 10.2222H12.5V14.861H19.3888C19.25 16.0138 18.5 17.7499 16.8333 18.9165L16.8099 19.0718L20.5207 21.9465L20.7778 21.9722C23.1388 19.7916 24.5 16.5832 24.5 12.7777Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12.5002 25.0001C15.8751 25.0001 18.7084 23.8889 20.778 21.9723L16.8335 18.9167C15.778 19.6528 14.3613 20.1667 12.5002 20.1667C9.19466 20.1667 6.38913 17.9862 5.38903 14.9723L5.24244 14.9847L1.38396 17.9709L1.3335 18.1111C3.38903 22.1944 7.61126 25.0001 12.5002 25.0001Z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.38884 14.9722C5.12495 14.1944 4.97223 13.361 4.97223 12.5C4.97223 11.6388 5.12495 10.8055 5.37495 10.0277L5.36796 9.86209L1.46113 6.828L1.3333 6.8888C0.486116 8.58327 0 10.4861 0 12.5C0 14.5139 0.486116 16.4166 1.3333 18.111L5.38884 14.9722Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12.5002 4.8333C14.8474 4.8333 16.4307 5.84719 17.3335 6.69447L20.8613 3.25C18.6947 1.23612 15.8751 0 12.5002 0C7.61126 0 3.38903 2.80553 1.3335 6.88884L5.37515 10.0278C6.38913 7.01388 9.19466 4.8333 12.5002 4.8333Z"
                          fill="#EB4335"
                        />
                      </svg>
                    }
                    className="logbotbutton"
                  >
                    Register with google
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.7391 4.57107 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.74609C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6359 4.88281 18.0664 5.12695 18.0664 5.12695V8.20313H16.4902C14.9374 8.20313 14.4531 9.16667 14.4531 10.1552V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.4289 23.9104 25 18.7391 25 12.5Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M17.3657 16.1133L17.9199 12.5H14.4531V10.1552C14.4531 9.16667 14.9374 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6359 4.88281 15.2683 4.88281C12.4131 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C11.8411 25.0506 13.1589 25.0506 14.4531 24.8481V16.1133H17.3657Z"
                          fill="white"
                        />
                      </svg>
                    }
                    className="logbotbutton"
                  >
                    Register with facebook
                  </Button>
                  
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <VerifyOtp /> */}
    </>
  );
}
