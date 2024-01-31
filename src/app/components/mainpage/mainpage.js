"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Paper,
  CardActions,
} from "@mui/material";
import backgroundimage from "../mainpage/mainpagebackground.png";
import sideimage from "../mainpage/mainpageside.png";
import slidericon from "../mainpage/slidericon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import otherservices from "../mainpage/otherservices.png";
import Image from "next/image";
import ImageGallary from "./imageGallary";

const Main = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    // ... (add other cities)
  ];

  const suggestions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    // ... (add other suggestions)
  ];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const imagesMain = [
    {
      imgpath:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
    {
      imgpath:
        "https://www.trinitypreston.co.uk/images/products/detached-houses-for-sale-in-preston-four-bedroom.jpg",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
    {
      imgpath:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slidericon:
        "https://static.wixstatic.com/media/46581d_d733ea1c0c674d319f1c249e77d8744f~mv2.png",
      title: "Kesar Lands Private Limited",
      text: "Residential Plots",
      amount: "₹ 47 L - 78 L",
    },
  ];

  const images = [
    {
      range: "₹50.66L - 53.03 L",
      location: "Located at Jamtha",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      range: "₹76.66L - 78.03 L",
      location: "Located at Mumbai",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const bestproperty = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const FeaturedDevelopers = [
    {
      icon: "https://media.licdn.com/dms/image/D4D1BAQH60VFBx2tDSA/company-background_10000/0/1654254865697/mauli_infratech_cover?e=2147483647&v=beta&t=xwnpvJSPODGsYNDWWyjDFiMhIibj17gGjscqHROAlWA",
      heading: "Mauli Infratech",
      year: "2005",
      yeartext: "Estd",
      project: "15",
      projectText: "Projects",
      paragraph:
        "MAULI INFRAtech have brought the classic legacy of world renowned Real-estates with the best global lifestyles for you here in Nagpur. Mauli Infra is nagpur based residential and commercial land development company. With an experience over 10+ years, We have executed many successful residential land projects in NagpurCompleted Project 14 by Mauli Infratech.",
    },
    {
      icon: "https://im.proptiger.com/3/783929/13/pankaj-construction-139039619.jpeg",
      heading: "Pankaj Construction ",
      year: "1990",
      yeartext: "Estd",
      project: "25",
      projectText: "Projects",
      paragraph:
        "MAULI INFRAtech have brought the classic legacy of world renowned Real-estates with the best global lifestyles for you here in Nagpur. Mauli Infra is nagpur based residential and commercial land development company. With an experience over 10+ years, We have executed many successful residential land projects in NagpurCompleted Project 14 by Mauli Infratech.",
    },
    {
      icon: "https://rivirtual1.s3.ap-south-1.amazonaws.com/in/storage/app/public/profile_picture/1697020479-1545.png",
      heading: "Radha Madhav Developers",
      year: "2005",
      yeartext: "Year Estd",
      project: "15",
      projectText: "Projects",
      paragraph:
        "MAULI INFRAtech have brought the classic legacy of world renowned Real-estates with the best global lifestyles for you here in Nagpur. Mauli Infra is nagpur based residential and commercial land development company. With an experience over 10+ years, We have executed many successful residential land projects in NagpurCompleted Project 14 by Mauli Infratech.",
    },
  ];

  const recentRealstate = [
    {
      imgpath:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Top 10 best appreciating condos in Orlando",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "These were the most expensive Orlando hou...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The top 5 most livable Orlando neighbourho...",
      text: "March 21, 2022",
    },
  ];

  return (
    <>
      <Box style={{ marginTop: "73px", padding: "60px 30px" }}>
        <Grid container spacing={3} className="backgroundImageContainer">
          <Grid item lg={7} md={7} xs={12}>
            <Typography variant="h3" fontWeight={600} width={600} mb={2}>
              Easy Way To Find Your Dream House
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" mb={2}>
              Search and find your dream property at an affordable price, with
              the best quality. Only available on Real Estate.
            </Typography>

            <Box display="flex" mb={2}>
              <Button
                className="mainpagebutton"
                style={{ background: "#0066ab1a", color: "#0066AB" }}
              >
                Buy
              </Button>
              <Button className="mainpagebutton">Rent</Button>
              <Button className="mainpagebutton">Commercial</Button>
              <Button className="mainpagebutton">PG/Co-Living</Button>
              <Button className="mainpagebutton">Plots</Button>
            </Box>

            <Box className="outerwrap">
              <Grid container style={{ display: "flex", alignItems: "center" }}>
                <Grid item lg={3} md={3} xs={3}>
                  <Select
                    value={selectedCity}
                    onChange={handleCityChange}
                    displayEmpty
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remove the border
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Choose a city
                    </MenuItem>
                    {indianCities.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item lg={7} md={7} xs={7}>
                  <input
                    placeholder="Search for locality, landmark, project or builder"
                    style={{
                      fontSize: "15px",
                      width: "100%",
                      border: "0",
                      outline: "0",
                    }}
                  />
                </Grid>
                <Grid item lg={2} md={2} xs={2}>
                  <Button
                    className="freehousing_button"
                    style={{
                      color: "#fff",
                      width: "100%",
                      textTransform: "none",
                    }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box
              style={{
                display: "flex",
                marginTop: "35px",
                alignItems: "center",
              }}
            >
              <Typography>Sugessions:</Typography>
              <ul
                style={{
                  display: "flex",
                  marginLeft: "15px",
                  flexWrap: "wrap",
                }}
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#F5F5F5",
                      padding: "7px",
                      marginLeft: "10px",
                      borderRadius: "3px",
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <Box style={{ background: "#F3F4F4", padding: "20px" }}>
              <Box>
                <Card sx={{ maxWidth: 465 }}>
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkG49XwNNvHdaSkAGaPF4JjZ6Y9Zk9CFlRiZEWAy6tA&s"
                    sx={{ height: 150 }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" fontWeight={"600"}>
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography>Located at Jamtha</Typography>
                      </Box>
                      <Button
                        variant="contained"
                        style={{ textTransform: "none" }}
                      >
                        Contact
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <Card
                  sx={{ maxWidth: 465 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkG49XwNNvHdaSkAGaPF4JjZ6Y9Zk9CFlRiZEWAy6tA&s"
                    sx={{ height: 110, width: "60%" }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" fontWeight={"600"}>
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography>Located at Jamtha</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <Card
                  sx={{ maxWidth: 465 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkG49XwNNvHdaSkAGaPF4JjZ6Y9Zk9CFlRiZEWAy6tA&s"
                    sx={{ height: 110, width: "60%" }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" fontWeight={"600"}>
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography>Located at Jamtha</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={4}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" fontWeight={700}>
              In Spotlight
            </Typography>
            <Typography color={"#535353"}>
              Explore our recent property here
            </Typography>
          </Box>
          <Grid item lg={12} className="CarDetails-page" pt={1}>
            <Slider {...settings}>
              {imagesMain.map((image, index) => (
                <Box key={index}>
                  <Box style={{ position: "relative" }}>
                    <div
                      className="image-container"
                      style={{
                        position: "relative",
                        height: "470px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={image.imgpath}
                        alt={`Slider Image ${index + 1}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "100%",
                        }}
                      />
                      <div
                        className="image-overlay"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "30%", // Adjust the height as needed
                          backgroundImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
                        }}
                      ></div>
                    </div>
                    <Box
                      style={{
                        position: "absolute",
                        width: " -webkit-fill-available",
                        bottom: "20px",
                        left: "20px",
                        right: "20px",
                        color: "#fff",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <img
                              src={image.slidericon}
                              style={{
                                height: "40px",
                                width: "40px",
                              }}
                            />
                          </Box>
                          <Box
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginLeft: "15px",
                            }}
                          >
                            <Typography fontWeight={"600"}>
                              {image.title}
                            </Typography>
                            <Typography>{image.text}</Typography>
                          </Box>
                        </Box>
                        <Box style={{ display: "flex", alignItems: "center" }}>
                          <Typography mr={2} fontWeight={"600"}>
                            {image.amount}
                          </Typography>
                          <Button variant="contained">View</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Box marginTop={4} style={{ width: "100%" }}>
          <Box
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight={700}>
                Best Properties to Buy
              </Typography>
              <Typography color={"#535353"}>
                Best properties to buy in the cities
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Box>
                <Button
                  style={{
                    background: "#0066ab1a",
                    color: "#0066AB",
                    textTransform: "none",
                  }}
                >
                  Nagpur
                </Button>
                <Button
                  className="mainpagebutton"
                  style={{ marginLeft: "7px" }}
                >
                  Amravati
                </Button>
              </Box>
              <Box>
                <Link
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#3D3D3D",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  View all
                  <ArrowForwardIcon
                    style={{
                      marginLeft: "7px",
                      height: "15px",
                      width: "15px",
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>

          <Grid item lg={12} spacing={2} className="CarDetails-page" pt={1}>
            <Slider {...bestproperty}>
              {images.map((step, index) => (
                <Card key={index} style={{ marginRight: "10px" }}>
                  <div>
                    <Box
                      component="img"
                      sx={{
                        height: 170,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                    <Box style={{ padding: "10px" }}>
                      <Typography variant="h6" fontWeight={500}>
                        {step.range}
                      </Typography>
                      <Typography variant="p" mt={1}>
                        {step.location}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "10px",
                        }}
                      >
                        <Box style={{ display: "flex" }}>
                          <BedroomChildOutlinedIcon style={{ color: "gray" }} />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {step.bedroomtext}
                          </span>
                        </Box>
                        <Box
                          style={{
                            display: "flex",
                            marginLeft: "20px",
                          }}
                        >
                          <BathtubOutlinedIcon style={{ color: "gray" }} />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {step.bathroomtext}
                          </span>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </Card>
              ))}
            </Slider>
          </Grid>
        </Box>

        <Box marginTop={4} style={{ width: "100%" }}>
          <Box
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight={700}>
                Recently Added Properties
              </Typography>
              <Typography color={"#535353"}>
                Best properties to buy in the cities
              </Typography>
            </Box>
          </Box>

          <Grid item lg={12} spacing={2} className="CarDetails-page" pt={1}>
            <Slider {...bestproperty}>
              {images.map((step, index) => (
                <Card key={index} style={{ marginRight: "10px" }}>
                  <div>
                    <Box
                      component="img"
                      sx={{
                        height: 170,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                    <Box style={{ padding: "10px" }}>
                      <Typography variant="h6" fontWeight={500}>
                        {step.range}
                      </Typography>
                      <Typography variant="p" mt={1}>
                        {step.location}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          marginTop: "10px",
                        }}
                      >
                        <Box style={{ display: "flex" }}>
                          <BedroomChildOutlinedIcon style={{ color: "gray" }} />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {step.bedroomtext}
                          </span>
                        </Box>
                        <Box
                          style={{
                            display: "flex",
                            marginLeft: "20px",
                          }}
                        >
                          <BathtubOutlinedIcon style={{ color: "gray" }} />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {step.bathroomtext}
                          </span>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </Card>
              ))}
            </Slider>
          </Grid>
        </Box>

        <Grid container marginTop={"70px"}>
          <Grid item lg={5} md={5} xs={12}>
            <Image
              src={otherservices}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item lg={7} md={7} xs={12} style={{ padding: "40px" }}>
            <Typography variant="h3" fontWeight={"700"}>
              Not Only <br />
              Buying, Selling or Renting,
              <br />
              We can help you with <br /> our Other Services
            </Typography>
            <Paper style={{ padding: "30px", marginTop: "30px" }}>
              <Grid
                container
                lg={12}
                md={12}
                xs={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid item lg={5} md={5} xs={5}>
                  <Typography variant="h6" fontWeight={700}>
                    Rent Agreements
                  </Typography>
                  <Typography fontSize={"12px"} mt={2}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </Typography>
                  <Box style={{ marginTop: "12px", marginLeft: "10px" }}>
                    <Link
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#3D3D3D",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      View
                      <ArrowForwardIcon
                        style={{
                          marginLeft: "7px",
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </Link>
                  </Box>
                </Grid>
                <Grid item lg={5} md={5} xs={5}>
                  <Typography variant="h6" fontWeight={700}>
                    Home Loans
                  </Typography>
                  <Typography fontSize={"12px"} mt={2}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </Typography>
                  <Box style={{ marginTop: "12px", marginLeft: "10px" }}>
                    <Link
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#3D3D3D",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      View
                      <ArrowForwardIcon
                        style={{
                          marginLeft: "7px",
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Box marginTop={4} style={{ width: "100%" }}>
          <Box
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight={700}>
                Featured Developers
              </Typography>
              <Typography color={"#535353"}>
                Prominent developers in Nagpur
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} marginTop={"20px"}>
            {FeaturedDevelopers.map((developer, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper style={{ padding: "30px", textAlign: "center" }}>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Box
                      style={{
                        border: "1px solid #CECECE",
                        borderRadius: "3px",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={developer.icon}
                        alt={developer.heading}
                        style={{
                          height: "55px",
                          width: "90px",
                        }}
                      />
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "15px",
                        marginTop: "15px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "17px", fontWeight: "700" }}
                      >
                        {developer.heading}
                      </Typography>
                      <Box style={{ display: "flex" }}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            fontWeight={600}
                          >
                            {developer.year}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {developer.yeartext}
                          </Typography>
                        </Box>
                        <Box style={{ marginLeft: "20px" }}>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            fontWeight={600}
                          >
                            {developer.project}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {developer.projectText}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    style={{ marginTop: "10px", textAlign: "left" }}
                  >
                    {developer.paragraph}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box marginTop={4} style={{ width: "100%" }}>
          <Box
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight={700}>
                Types of properties you can buy through us
              </Typography>
              <Typography color={"#535353"}>
                Prominent developers in Nagpur
              </Typography>
            </Box>
          </Box>
          <Grid container>{/* <ImageGallary /> */}</Grid>
        </Box>

        <Box marginTop={4} style={{ width: "100%" }}>
          <Box
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" fontWeight={700}>
                The Most Recent Local Real Estate News
              </Typography>
              <Typography color={"#535353"}>
                Lorem Ipsum is simply dummy text
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} marginTop={"20px"}>
            {recentRealstate.map((developer, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  style={{
                    padding: "10px",
                    border: "1px solid #202020",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    sx={{ height: 170 }}
                    image={developer.imgpath}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      {developer.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {developer.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box style={{ marginTop: "12px", marginLeft: "10px" }}>
                      <Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "#3D3D3D",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        View
                        <ArrowForwardIcon
                          style={{
                            marginLeft: "7px",
                            height: "15px",
                            width: "15px",
                          }}
                        />
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Main;
