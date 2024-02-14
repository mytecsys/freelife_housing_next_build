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
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CircleIcon from "@mui/icons-material/Circle";
import { useSearchParams } from "next/navigation";

export default function SingleProperty() {
  const searchParams = useSearchParams();

  const propertyId = searchParams.get("property_id");
  // const propertyId = window.location.search;
  console.log("search---", propertyId);

  const [propertyDetails, setPropertyDetails] = useState([]);
  console.log("propertyDetails--", propertyDetails);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("function trigger");
      setIsLoading(true); // Indicate loading state
      setError(null); // Clear any previous errors

      try {
        const token = localStorage.getItem("token");
        const payload = {
          property_id: propertyId,
        };
        console.log("payload", payload);

        const postUrl = `${constant.baseurl}property/singleproperty`; // Replace 'your_api_endpoint_here' with your actual API endpoint

        const response = await ApiPostMethodWithToken(postUrl, payload, token);
        setPropertyDetails(response.property_detail || "");
        console.log("response", response.property_detail);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [propertyId]);

  const [buttonText, setButtonText] = useState("I am intreseted");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const AddLead = async () => {
    console.log("function trigger");

    try {
      const token = localStorage.getItem("token");
      const payload = {
        user_id: propertyDetails.user_id,
        property_id: propertyId,
        owner_id: propertyDetails._id,
      };
      console.log("response lead payload", payload);

      const postUrl = `${constant.baseurl}lead/addlead`; // Replace 'your_api_endpoint_here' with your actual API endpoint
      console.log("response lead url", postUrl);

      const response = await ApiPostMethodWithToken(postUrl, payload, token);
      setButtonText("Interest Added Successfully");
      setButtonDisabled(true);

      // setPropertyList(response);

      console.log("response lead generation", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   AddLead();
  // });

  const propertyDescription =
    propertyDetails && propertyDetails.advanceDetails
      ? propertyDetails.advanceDetails.propertyDescription
      : "";

  const floorUrl =
    propertyDetails &&
    propertyDetails.floorPlanArray &&
    propertyDetails.floorPlanArray.length > 0
      ? propertyDetails.floorPlanArray[0]
      : "";

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
    arrows: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoPlay: true,
    afterChange: (index) => setSelectedImage(imagesMain[index]), // Update selected image after each slide change
  };

  const thumbnailSliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of thumbnails to show at once
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Adjust the number of thumbnails for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, // Adjust the number of thumbnails for even smaller screens
        },
      },
    ],
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

  // const handleThumbnailClick = (image) => {
  //   setSelectedImage(image);
  // };

  const thumbnailStyle = {
    width: "100%",
    height: "150px",
    cursor: "pointer",
    border: "2px solid transparent", // Default border style for thumbnails
    borderRadius: "5px",
  };

  const selectedThumbnailStyle = {
    border: "2px solid blue", // Highlight style for selected thumbnail
    borderRadius: "5px",
  };

  const formatRent = (rent) => {
    if (rent === undefined || rent === null) {
      return ""; // Return an empty string or handle it according to your requirement
    }

    if (rent >= 100000) {
      // Convert rent to Lakh (L) format
      return `${(rent / 100000).toFixed(1)}L`;
    } else if (rent >= 1000) {
      // Convert rent to Thousand (k) format
      return `${(rent / 1000).toFixed(0)}k`;
    } else {
      return rent.toString();
    }
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize selected image index state

  const handleSlideChange = (index) => {
    setSelectedImageIndex(index); // Update selected image index when a slide changes
  };

  console.log("Selected image index:", selectedImageIndex);

  return (
    <>
      {/* <Suspense fallback={<div>Loading search data...</div>}> */}
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
                ₹
                {formatRent(
                  propertyDetails &&
                    propertyDetails?.propertyDetails?.monthlyRent
                )}
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
              <Slider {...settings} afterChange={handleSlideChange}>
                {propertyDetails &&
                  propertyDetails?.imageArray?.map((image, index) => (
                    <Box key={index}>
                      <img
                        src={image}
                        alt={`Slider Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "450px",
                          borderRadius: "4px",
                        }}
                      />
                    </Box>
                  ))}
              </Slider>
            </Grid>

            {/* Thumbnails */}
            <Grid container item spacing={3} lg={12}>
              {propertyDetails &&
                propertyDetails?.imageArray?.map((image, index) => (
                  <Grid
                    item
                    key={index}
                    xs={3}
                    lg={2}
                    md={2}

                    // onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail Image ${index + 1}`}
                      // style={thumbnailStyle}
                      style={{
                        ...thumbnailStyle,
                        ...(selectedImageIndex === index
                          ? selectedThumbnailStyle
                          : {}),
                      }}
                    />
                  </Grid>
                ))}
            </Grid>

            {/* <Grid item lg={12} className="ThumbnailSlider">
              <Slider {...thumbnailSliderSettings}>
                {propertyDetails &&
                  propertyDetails?.imageArray?.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Thumbnail Image ${index + 1}`}
                        // style={thumbnailStyle}
                        style={{
                          ...thumbnailStyle,
                          ...(selectedImageIndex === index
                            ? selectedThumbnailStyle
                            : {}),
                        }}
                        // Change slide when thumbnail is clicked
                      />
                    </div>
                  ))}
              </Slider>
            </Grid> */}
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
                    {propertyDetails && propertyDetails.propertyDetails
                      ? Object.entries(propertyDetails.propertyDetails).map(
                          ([key, value]) => {
                            // Exclude 'id' key
                            if (key !== "_id") {
                              // Format the key
                              const formattedKey = key
                                .split(/(?=[A-Z])/)
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join(" ");

                              // Check if the key is "availableFrom" and value is a valid date string
                              if (
                                key === "availableFrom" &&
                                typeof value === "string" &&
                                value.match(
                                  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
                                )
                              ) {
                                const formattedDate = new Date(
                                  value
                                ).toLocaleDateString();
                                return (
                                  <div
                                    style={{
                                      width: "40%",
                                      paddingBottom: "15px",
                                    }}
                                    key={key}
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
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <span
                                            style={{
                                              marginLeft: "7px",
                                              display: "flex",
                                            }}
                                          >
                                            <RadioButtonCheckedIcon
                                              fontSize="small"
                                              style={{
                                                marginRight: "10px",
                                                color: "gray",
                                              }}
                                            />
                                            {formattedKey}:
                                          </span>
                                        </div>
                                        {/* Render the formatted date */}
                                        <div>{formattedDate}</div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              } else if (typeof value !== "object" && value) {
                                // Render other properties without conversion
                                return (
                                  <div
                                    style={{
                                      width: "40%",
                                      paddingBottom: "15px",
                                    }}
                                    key={key}
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
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <span
                                            style={{
                                              marginLeft: "7px",
                                              display: "flex",
                                            }}
                                          >
                                            <RadioButtonCheckedIcon
                                              fontSize="small"
                                              style={{
                                                marginRight: "10px",
                                                color: "gray",
                                              }}
                                            />
                                            {formattedKey}:
                                          </span>
                                        </div>
                                        {/* Render the value */}
                                        <div>{value}</div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            }
                            return null; // Exclude rendering of 'id'
                          }
                        )
                      : ""}
                  </Box>
                </Box>
                {propertyDetails &&
                propertyDetails.advanceDetails &&
                Object.keys(propertyDetails.advanceDetails)
                  .filter((key) => key !== "_id") // Exclude _id field
                  .some((key) => propertyDetails.advanceDetails[key]) ? ( // Check if any field other than _id has a truthy value
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
                      {propertyDetails && propertyDetails.advanceDetails
                        ? Object.entries(propertyDetails.advanceDetails).map(
                            ([key, value], index) => {
                              // Exclude '_id', 'address', and 'propertyDescription' keys
                              if (
                                key !== "_id" &&
                                key !== "address" &&
                                key !== "propertyDescription" &&
                                value // Check if value is truthy
                              ) {
                                // Format the key
                                const formattedKey = key
                                  .split(/(?=[A-Z])/)
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join(" ");

                                // Render the property
                                return (
                                  <div
                                    style={{
                                      width: "40%",
                                      paddingBottom: "15px",
                                    }}
                                    key={index}
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
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <span
                                            style={{
                                              marginLeft: "7px",
                                              display: "flex",
                                            }}
                                          >
                                            <RadioButtonCheckedIcon
                                              fontSize="small"
                                              style={{
                                                marginRight: "10px",
                                                color: "gray",
                                              }}
                                            />{" "}
                                            {formattedKey}:
                                          </span>
                                        </div>
                                        <div>{value}</div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                              return null; // Exclude rendering of '_id', 'address', 'propertyDescription', and properties with empty values
                            }
                          )
                        : ""}
                    </Box>
                  </Box>
                ) : (
                  ""
                )}

                {propertyDetails &&
                propertyDetails.amenities &&
                Object.keys(propertyDetails.amenities)
                  .filter((key) => key !== "_id") // Exclude _id field
                  .some((key) => propertyDetails.amenities[key]) ? (
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ padding: "15px 0" }}
                      fontWeight={700}
                    >
                      Outdoor features
                    </Typography>

                    <Box
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      {propertyDetails &&
                        propertyDetails.amenities &&
                        Object.entries(propertyDetails.amenities).map(
                          ([category, items], index) => {
                            if (category.toLowerCase() === "isdelete") {
                              return null; // Skip rendering the category "isDelete"
                            }

                            return (
                              <div
                                key={index}
                                style={{
                                  width: "40%",
                                  paddingBottom: "15px",
                                }}
                              >
                                {(() => {
                                  const formattedCategory = category
                                    .split(/(?=[A-Z])/)
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join(" ");
                                  return (
                                    <>
                                      <Typography
                                        variant="subtitle1"
                                        style={{
                                          fontWeight: 700,
                                          color: "#555",
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <RadioButtonCheckedIcon
                                          fontSize="small"
                                          style={{
                                            marginRight: "10px",
                                            color: "gray",
                                          }}
                                        />{" "}
                                        {formattedCategory}
                                      </Typography>
                                      {items &&
                                        items.map((item, itemIndex) => (
                                          <div style={{ marginLeft: "20px" }}>
                                            <div key={itemIndex}>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      marginLeft: "7px",
                                                    }}
                                                  >
                                                    {item}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                    </>
                                  );
                                })()}
                              </div>
                            );
                          }
                        )}
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
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
              {/* <Box style={{ marginTop: "20px" }}>
                <Paper style={{ padding: "20px" }}>
                  <Typography variant="h6" pb={2} fontWeight={700}>
                    Virtual Tour
                  </Typography>
                  <Box>
                    {/* <video width="640" height="360" controls>
                      <source src={housevideo} type="video/mp4" />
                    </video> */}
              {/* <Image src={house} />
                  </Box>
                </Paper>
              </Box>  */}
              <Box style={{ marginTop: "20px" }}>
                {floorUrl && (
                  <Paper style={{ padding: "20px" }}>
                    <Typography variant="h6" pb={2} fontWeight={700}>
                      Floor plans
                    </Typography>
                    <Box>
                      {/* <video width="640" height="360" controls>
                      <source src={housevideo} type="video/mp4" />
                    </video> */}
                      <img
                        src={floorUrl}
                        style={{ width: "100%", height: "430px" }}
                      />
                    </Box>
                  </Paper>
                )}
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
                    {/* <Image
                      src={loaction}
                      style={{ width: "100%", height: "430px" }}
                    /> */}
                    <iframe
                      title="Property Location"
                      height="450"
                      loading="lazy"
                      allowFullScreen
                      frameBorder="0"
                      src={propertyDetails.googleMapsLink}
                      style={{ width: "100%" }}
                    ></iframe>
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
                  <Typography>{propertyDescription}</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Box style={{ padding: "0 0 0 20px" }}>
                <Button
                  variant="contained"
                  style={{ width: "100%", marginTop: "10px" }}
                  onClick={AddLead}
                  disabled={buttonDisabled}
                >
                  {buttonText}
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
      {/* </Suspense> */}
    </>
  );
}
