"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Typography, Container } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import Breadcrumb from "../../components/breadcrumbs/breadcrumbs";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import house from "../../houses.png";
import floorplan from "../../floorplan.png";
import loaction from "../../location.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import HeaderComponent from "@/app/components/HeaderComponent";
import FooterComponent from "@/app/components/FooterComponet";
import backendApi from "@/app/apiconfigurations/helper";
import { ApiPostMethodWithToken } from "@/app/apiconfigurations/helper";
import constant from "@/app/apiconfigurations/Constant";

export default function SingleProperty() {
  // api call single property

  useEffect(() => {
    const fetchData = async () => {
      console.log("function trigger");

      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JubyI6IjkxMzA1OTE2NDciLCJ1c2VySWQiOiI2NWJkMGVjMjFmMzc3MGI5OTUxNjlkNzgiLCJpYXQiOjE3MDczMDg0NDQsImV4cCI6MTcwNzMxMjA0NH0.AKDsEuUAeezee4NnunQxtueozJHnxf-LJKuNxKYRmo8";
        const payload = {
          user_id: "65c0862d904d2961951a99ad",
          property_id: "65c32fbc068fd4e9909b0920",
        };
        console.log("payload", payload);

        const postUrl = `${constant.baseurl}property/singleproperty`; // Replace 'your_api_endpoint_here' with your actual API endpoint

        const response = await ApiPostMethodWithToken(postUrl, payload, token);
        console.log("response", response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  let videosrc = "../../housevideo.mp4";

  const nearbyData = [
    {
      school: "0.5km",
      "Grocery center": "0.2km",
      "Hospital, medical": "1.3km",
      "Gym, wellness": "1.4km",
      University: "2.2km",
      Market: "0.5km",
      "Metro station:": "0.1km",
      "Market stop": "0.6km",
    },
  ];

  const PropertyDetails = [
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Size",
      value: "290m2",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Western Toilet(s)",
      value: "4",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Bedrooms:",
      value: "3",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Balcony(ies)",
      value: "Ground",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Total Floors",
      value: "Attic",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Built-up Area",
      value: "290m2",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Indian Tiolet(s)",
      value: "2",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Property Floor:",
      value: "3",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Facing",
      value: "Ground",
    },
  ];

  const Propertyutility = [
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Lift",
      value: "Natural Gas",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "CCTV Camera",
      value: "-",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Bedrooms",
      value: "-",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Bedrooms",
      value: "Yes",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Power Backup",
      value: "Attic",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Intercom:",
      value: "yes",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Window Type:",
      value: "Aluminum frame",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Cable TV:",
      value: "3",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "WiFi:",
      value: "Ground",
    },
  ];

  const OutdorFeatures = [
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Garage:",
      value: "Yes",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Disabled Access:",
      value: "Ramp",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Fence:",
      value: "Wood fence",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Pet Friendly:",
      value: "Yes",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Garden:",
      value: "60m2",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Swimming Pool:",
      value: "3x5x1.5m",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Security:",
      value: "3 Cameras",
    },
    {
      icon: <LocalPrintshopOutlinedIcon />,
      text: "Barbeque, grill:",
      value: "Yes",
    },
  ];

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (index) => setSelectedImage(imagesMain[index]), // Update selected image after each slide change
  };

  const imagesMain = [
    {
      imgpath:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imgpath:
        "https://www.trinitypreston.co.uk/images/products/detached-houses-for-sale-in-preston-four-bedroom.jpg",
    },
    {
      imgpath:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imgpath:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const thumbnailStyle = {
    width: "100%",
    height: "150px",
    cursor: "pointer",
    border: "2px solid transparent", // Default border style for thumbnails
  };

  const selectedThumbnailStyle = {
    border: "2px solid blue", // Highlight style for selected thumbnail
  };

  return (
    <>
      <HeaderComponent />
      <Box style={{ marginTop: "100px", padding: "30px", color: "#535353" }}>
        <Breadcrumb />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Luxury House in Greenville
            </Typography>
            <Typography pt={1}>Located at Jamtha</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                color={"#00A0E3"}
                fontWeight={700}
                pb={1}
              >
                ₹30.66L - 53.03 L
              </Typography>
            </Box>
            <Box>
              <Button
                startIcon={<ShareOutlinedIcon />}
                style={{
                  background: "#0066AB1A",
                  textTransform: "none",
                  marginRight: "10px",
                }}
              >
                Share
              </Button>
              <Button
                startIcon={<FavoriteBorderOutlinedIcon />}
                style={{
                  background: "#0066AB1A",
                  textTransform: "none",
                  marginRight: "10px",
                }}
              >
                Favorite
              </Button>
              <Button
                startIcon={<LocalPrintshopOutlinedIcon />}
                style={{ background: "#0066AB1A", textTransform: "none" }}
              >
                Print
              </Button>
            </Box>
          </Box>
        </Box>

        <Box style={{ margin: "20px 0" }}>
          <Grid container spacing={3}>
            {/* Main Slider */}
            <Grid item lg={12} className="CarDetails-page">
              <Slider {...settings}>
                {imagesMain.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.imgpath}
                      alt={`Slider Image ${index + 1}`}
                      style={{ width: "100%", height: "400px" }}
                    />
                  </div>
                ))}
              </Slider>
            </Grid>

            {/* Thumbnails */}
            <Grid container item spacing={3} lg={12}>
              {imagesMain.map((image, index) => (
                <Grid
                  item
                  key={index}
                  xs={3}
                  lg={2}
                  md={2}
                  onClick={() => handleThumbnailClick(image)}
                  style={{
                    ...thumbnailStyle,
                    ...(selectedImage === image ? selectedThumbnailStyle : {}),
                  }}
                >
                  <img
                    src={image.imgpath}
                    alt={`Thumbnail Image ${index + 1}`}
                    style={thumbnailStyle}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: "40px" }}>
          <Grid container>
            <Grid item lg={8} md={8} xs={12}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h6" pb={2} fontWeight={700}>
                  Property features
                </Typography>
                <Typography color={"#535353"}>
                  Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
                  equidem admodum disputando ea. An duis dolor appellantur mea,
                  est id zril nobis appellantur. Ei sea duis senserit qualisque,
                  te facilisis appellantur pri. Id aperiri
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    style={{ padding: "30px 0 15px 0" }}
                    fontWeight={700}
                  >
                    Property details
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                      padding: "15px 0 ",
                    }}
                  >
                    {PropertyDetails.map((detail, index) => (
                      <div
                        key={index}
                        style={{ width: "40%", paddingBottom: "15px" }}
                      >
                        <div
                          style={{
                            marginRight: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {detail.icon}
                              <span style={{ marginLeft: "7px" }}>
                                {detail.text}:
                              </span>
                            </div>
                            <div>{detail.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    style={{ padding: "15px 0" }}
                    fontWeight={700}
                  >
                    Property utility
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                      padding: "15px 0 ",
                    }}
                  >
                    {Propertyutility.map((utility, index) => (
                      <div
                        key={index}
                        style={{ width: "40%", paddingBottom: "15px" }}
                      >
                        <div
                          style={{
                            marginRight: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {utility.icon}
                              <span style={{ marginLeft: "7px" }}>
                                {utility.text}:
                              </span>
                            </div>
                            <div>{utility.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    style={{ padding: "15px 0" }}
                    fontWeight={700}
                  >
                    Outdor Features
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                      padding: "15px 0 ",
                    }}
                  >
                    {OutdorFeatures.map((outdoor, index) => (
                      <div
                        key={index}
                        style={{ width: "40%", paddingBottom: "15px" }}
                      >
                        <div
                          style={{
                            marginRight: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {outdoor.icon}
                              <span style={{ marginLeft: "7px" }}>
                                {outdoor.text}:
                              </span>
                            </div>
                            <div>{outdoor.value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Box>
                </Box>
              </Paper>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h6" pb={2} fontWeight={700}>
                    Video
                  </Typography>
                  <Box>
                    <ReactPlayer
                      width="800px"
                      height="400px"
                      url="https://player.vimeo.com/external/222141033.sd.mp4?s=cb4965a7d8a1845a77a7cb42b5ec05a6167744bb&profile_id=164&oauth2_token_id=57447761"
                      controls={true} // Set to false to hide controls
                      muted={true}
                      light={false}
                      // picture in picture
                      pip={true}
                    />
                    <source
                      src="https://player.vimeo.com/external/222141033.sd.mp4?s=cb4965a7d8a1845a77a7cb42b5ec05a6167744bb&profile_id=164&oauth2_token_id=57447761"
                      type="video/mp4"
                    />
                    {/* <Image src={house} /> */}
                  </Box>
                </Paper>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h6" pb={2} fontWeight={700}>
                    Virtual Tour
                  </Typography>
                  <Box>
                    {/* <video width="640" height="360" controls>
                      <source src={housevideo} type="video/mp4" />
                    </video> */}
                    <Image src={house} />
                  </Box>
                </Paper>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h6" pb={2} fontWeight={700}>
                    Floor plans
                  </Typography>
                  <Box>
                    {/* <video width="640" height="360" controls>
                      <source src={housevideo} type="video/mp4" />
                    </video> */}
                    <Image
                      src={floorplan}
                      style={{ width: "100%", height: "430px" }}
                    />
                  </Box>
                </Paper>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h6" pb={2} fontWeight={700}>
                    Location
                  </Typography>
                  <Box>
                    {/* <video width="640" height="360" controls>
                      <source src={housevideo} type="video/mp4" />
                    </video> */}
                    <Image
                      src={loaction}
                      style={{ width: "100%", height: "430px" }}
                    />
                  </Box>
                </Paper>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h5" pb={2}>
                    What's nearby?
                  </Typography>
                  <Box>
                    {nearbyData.map((entry, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          marginBottom: "10px",
                          justifyContent: "space-between",
                        }}
                      >
                        {Object.entries(entry).map(([key, value]) => (
                          <div
                            key={key}
                            style={{
                              marginRight: "20px",
                              width: "40%",
                              marginBottom: "5px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div>{key}:</div>
                              <div>{value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Box>
                </Paper>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h5" pb={2}>
                    Description
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
                    equidem admodum disputando ea. An duis dolor appellantur
                    mea, est id zril nobis appellantur. Ei sea duis senserit
                    qualisque, te facilisis appellantur pri. Id aperiri aliquam
                    interesset mel. Contentiones vituperatoribus id est, per
                    prima nihil scripta no. No semper forensibus adipiscing quo.
                    Amet deleniti lobortis et eam. In oporteat pertinacia quo,
                    cu qui antiopam intellegebat, ei alii paulo has. In alia
                    eros ornatus pri, graeci accusata pericula an vix. His ne
                    homero dignissim, aliquam dolores scriptorem vis ut. Sit ad
                    suas adhuc interesset, nec no essent iuvaret adipiscing
                    everti.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Box style={{ padding: "0 0 0 20px" }}>
                <Button variant="contained" style={{ width: "100%" }}>
                  I am Intrested
                </Button>
                <Box
                  style={{
                    background: "#EAEAEA",
                    padding: "20px",
                    marginTop: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="h4">Related Property</Typography>
                  <Typography variant="p">
                    Tantas signiferumque eum at, vix an dicant fierent homero
                    dignissim.
                  </Typography>
                  <Box sx={{ maxWidth: 400, flexGrow: 1, marginTop: "20px" }}>
                    <AutoPlaySwipeableViews
                      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                    >
                      {images.map((step, index) => (
                        <Paper>
                          <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                              <>
                                <Box
                                  component="img"
                                  sx={{
                                    height: 255,
                                    display: "block",
                                    maxWidth: 400,
                                    overflow: "hidden",
                                    width: "100%",
                                  }}
                                  src={step.imgPath}
                                  alt={step.label}
                                />
                                <Box style={{ padding: "10px" }}>
                                  <Typography variant="h6" fontWeight={600}>
                                    {images[activeStep].range}
                                  </Typography>
                                  <Typography variant="p" mt={1}>
                                    {images[activeStep].location}
                                  </Typography>
                                  <Box
                                    style={{
                                      display: "flex",
                                      marginTop: "10px",
                                    }}
                                  >
                                    <Box style={{ display: "flex" }}>
                                      <BedroomChildOutlinedIcon
                                        style={{ color: "gray" }}
                                      />{" "}
                                      <span style={{ marginLeft: "5px" }}>
                                        {" "}
                                        {images[activeStep].bedroomtext}
                                      </span>
                                    </Box>
                                    <Box
                                      style={{
                                        display: "flex",
                                        marginLeft: "20px",
                                      }}
                                    >
                                      <BathtubOutlinedIcon
                                        style={{ color: "gray" }}
                                      />{" "}
                                      <span style={{ marginLeft: "5px" }}>
                                        {" "}
                                        {images[activeStep].bathroomtext}
                                      </span>
                                    </Box>
                                  </Box>
                                </Box>
                              </>
                            ) : null}
                          </div>
                        </Paper>
                      ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{ display: "flex", justifyContent: "center" }}
                      //   nextButton={
                      //     <Button
                      //       size="small"
                      //       onClick={handleNext}
                      //       disabled={activeStep === maxSteps - 1}
                      //     >
                      //       Next
                      //       {theme.direction === "rtl" ? (
                      //         <KeyboardArrowLeft />
                      //       ) : (
                      //         <KeyboardArrowRight />
                      //       )}
                      //     </Button>
                      //   }
                      //   backButton={
                      //     <Button
                      //       size="small"
                      //       onClick={handleBack}
                      //       disabled={activeStep === 0}
                      //     >
                      //       {theme.direction === "rtl" ? (
                      //         <KeyboardArrowRight />
                      //       ) : (
                      //         <KeyboardArrowLeft />
                      //       )}
                      //       Back
                      //     </Button>
                      //   }
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FooterComponent />
    </>
  );
}
