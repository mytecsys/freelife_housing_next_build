"use client";

import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export default function FooterComponent() {
  return (
    <>
      <Box
        style={{
          marginTop: "20px",
          background: " #EAEAEA",
          padding: "35px 30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={2} md={2}>
            <Box display={"flex"} alignItems={"center"}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 25C5.79649e-07 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 -7.90669e-08 25 0V25L0 25Z"
                  fill="#202020"
                />
                <path
                  d="M25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 1.00116e-06 31.6304 0 25L25 25L25 50Z"
                  fill="#9AA58E"
                />
                <path
                  d="M25 0C28.283 3.91499e-08 31.5339 0.646644 34.5671 1.90301C37.6002 3.15938 40.3562 5.00087 42.6777 7.32233C44.9991 9.6438 46.8406 12.3998 48.097 15.4329C49.3534 18.4661 50 21.717 50 25L25 25V0Z"
                  fill="#9AA58E"
                />
              </svg>
              <Typography variant="h5" ml={1}>
                Real State
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"15px"}>
                Manish Nagar, Nagpur
                <br />
                Email Us at: info@realstate.co
                <br />
                Call us: +919564857485
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2} md={2}>
            <Box>
              <Typography variant="h6" ml={"15px"}>
                Services
              </Typography>
              <List>
                <ListItem
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    alignItems: "baseline",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Buy Property
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Sell Property
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Rent Property
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={2} md={2}>
            <Box>
              <Typography variant="h6" ml={"15px"}>
                Company
              </Typography>
              <List>
                <ListItem
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    alignItems: "baseline",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Our Team
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={2} md={2}>
            <Box>
              <Typography variant="h6" ml={"15px"}>
                Support
              </Typography>
              <List>
                <ListItem
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    alignItems: "baseline",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    FAQ’S
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Support Center
                  </Link>
                  <Link
                    href="#"
                    style={{
                      padding: "5px 0",
                      textDecoration: "none",
                      color: "#3D3D3D",
                    }}
                  >
                    Help Center
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box>
              <Typography variant="h6" ml={"7px"}>
                Subscribe
              </Typography>
              <Typography ml={"8px"} style={{ paddingTop: "12px" }}>
                Subscribe to get latest news andpromo from us
              </Typography>
              <Box style={{ paddingTop: "12px" }}>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  {/* <OutlinedInput
                    id="outlined-adornment-weight"
                    label="Email Address"
                    endAdornment={
                      <InputAdornment position="end">
                        <ArrowRightAltOutlinedIcon />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  /> */}
                  <TextField
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <ArrowRightAltOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
