"use client";

import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Fab from "@mui/material/Fab";

export default function Filter() {
  const options = ["Agent", "Owner", "Builder", "Expert pro agent"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  //for property status
  const Propertystatus = ["For Rent", "For Sell"];
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handlePropertyStatusClick = (event) => {
    setSelectedStatus(event.target.value);
  };

  //for property Type

  const propertyType = [
    "Apartment",
    "Independent House",
    "Independent Floor",
    "Plot",
    "Studio",
    "Duplex",
    "Penthouse",
    "Villa",
    "Agricultural Land",
  ];
  const [selectedType, setSelectedType] = useState(null);

  const handlePropertyTypeClick = (event) => {
    setSelectedType(event.target.value);
  };

  //for Sale Type

  const saleType = [
    "Apartment",
    "Independent House",
    "Independent Floor",
    "Plot",
    "Studio",
    "Duplex",
    "Penthouse",
    "Villa",
    "Agricultural Land",
  ];
  const [selectedSaleType, setSelectedSaleType] = useState(null);

  const handlePropertysaleTypeClick = (event) => {
    setSelectedSaleType(event.target.value);
  };

  // for amminites

  const Aminities = [
    "Lift",
    "Gas Pipeline",
    "Swimming Pool",
    "Gated Community",
    "Gym",
    "WiFi",
    "Parking",
    "Washer",
  ];

  const [selectedAmminities, setSelectedAmminities] = useState(null);

  const handleAmminitiesChange = (event) => {
    setSelectedAmminities(event.target.value);
  };

  // for amminites

  const Facing = [
    "North Facing",
    "East Facing",
    "West Facing",
    "South Facing",
    "North-East Facing",
    "North-West Facing",
    "South-East Facing",
    "South-West Facing",
  ];

  const [selectedfacing, setSelectedFacing] = useState(null);

  const handleFacingChange = (event) => {
    setSelectedFacing(event.target.value);
  };

  //for age of property

  const ageofproperty = [
    "Less than 1 year",
    "Less than 3 years",
    "Less than 5 years",
    "Less than 10 years",
    "More than 10 years",
  ];
  const [selectedAgeProperty, setSelectedAgeProperty] = useState(null);

  const handleAgePropertyClick = (option) => {
    setSelectedAgeProperty(option);
  };

  //for property details

  const propertydetails = ["Corner Property", "Boundary Wall Present"];
  const [selectedPropertydetails, setSelectedPropertydetails] = useState(null);

  const handlePropertyClick = (option) => {
    setSelectedPropertydetails(option);
  };

  //for build up area

  const [value, setValue] = React.useState([1000, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    { value: 0, label: "0 Sq/Ft" },

    { value: 5000, label: "5000 Sq/Ft" },
  ];

  function valuetext(value) {
    return `₹${value}`;
  }

  //for price range

  const [price, setPrice] = React.useState([1000, 3000]);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const pricemarks = [
    { value: 0, label: "₹ 0" },
    { value: 150000, label: "₹1,50,000" },
  ];

  function valuePricetext(value) {
    return `₹${value}`;
  }

  // for bhk

  const BHK = [
    { label: "1RK" },
    { label: "1BHK" },
    { label: "2BHK" },
    { label: "3BHK" },
    { label: "4BHK" },
    { label: "5BHK" },
    { label: "6BHK" },
    { label: "7BHK" },
    { label: "8BHK" },
    { label: "9BHK" },
    { label: "10BHK" },
  ];
  //  for Bathroom

  const Bathroom = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
  ];

  // relevance status

  const Relevance = [
    { label: "Highest-Lowest" },
    { label: "Lowest-Highest" },
    { label: "Most Relevance" },
  ];

  // for possession status

  const PossessionStatus = [
    { label: "In 1 year" },
    { label: "In 2 year" },
    { label: "In 3 year" },
    { label: "In 4 year" },
    { label: "In 5 year" },
  ];

  const top100Films = [
    { label: "The Shawshank Redemption" },
    { label: "The Godfather" },
    { label: "The Godfather: Part II" },
    { label: "The Dark Knight" },
  ];

  const images = [
    {
      range: "₹50.66L - 53.03 L",
      location: "Located at Jamtha",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://s3-alpha-sig.figma.com/img/3439/6530/8acf15d1df495154d0cef2fb7c483ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGU7z6Hv8rSQFwZzjVmN4SggzInV-RrjwRezpaJfP83zRbawwgVIV2Apl3g1HM6n6rbGZJQKVPagGqqDiOllNbjeOxjs5KxEs9xbEB2vDS2MpigP1877t0UZn8ElVJmuJMb2Os2QsWX5M3HilAxcEho1uPAYHBigo9kCCMuNDDzq8Ldag4GODjthsV19TvSLvntRXIvnEHRtb~uQ8KrScz0nYZgNfRM0ljQ6R-gPu-rO1773-6jmoWsG6Y4c3G5P-ZgWi-0K6OnUBzfqCzoLRjSGKBNrY9JPTQZHZ6N-ADM9gTID8JgZB4icvpgII4Cjspj8LTvcuimoSm-rNVYllw__",
      icon: "https://s3-alpha-sig.figma.com/img/bb26/9b11/a69804cfcd572e8cb5b11cf874e177bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrpHghuzlrzD3Zizkui9TmEQR2loujBXpOOJKJPAkXVaJ5yJd71bYwl6n9lvcHLaygZ0bxCE~EyPUqtCoAWxg6MPfPsWxhxHDnJJd0I12X8Fa0yUBGOtBKbOTWFbCxSGJekdGjlxWn0W0et2ssAhi1cfvB4nf9jEbeyjYWr0c9a1UbJXTVnweMcBpR5CyZncrE16vxyChqW4nOuoHBBYMwoAt3mcHCJLmUD9YWHpPJ4LHs929JqAcVrtDharTObA2-Lc9celqfnUBfyItITOPFx3jiU-I18Vuimouv5PFUKMEEVZJcwnaqxAkda5RD1vl051XECLs9Z3Le3-lGhBYQ__",
    },
    {
      range: "₹76.66L - 78.03 L",
      location: "Located at Mumbai",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://s3-alpha-sig.figma.com/img/3439/6530/8acf15d1df495154d0cef2fb7c483ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGU7z6Hv8rSQFwZzjVmN4SggzInV-RrjwRezpaJfP83zRbawwgVIV2Apl3g1HM6n6rbGZJQKVPagGqqDiOllNbjeOxjs5KxEs9xbEB2vDS2MpigP1877t0UZn8ElVJmuJMb2Os2QsWX5M3HilAxcEho1uPAYHBigo9kCCMuNDDzq8Ldag4GODjthsV19TvSLvntRXIvnEHRtb~uQ8KrScz0nYZgNfRM0ljQ6R-gPu-rO1773-6jmoWsG6Y4c3G5P-ZgWi-0K6OnUBzfqCzoLRjSGKBNrY9JPTQZHZ6N-ADM9gTID8JgZB4icvpgII4Cjspj8LTvcuimoSm-rNVYllw__",
      icon: "https://s3-alpha-sig.figma.com/img/bb26/9b11/a69804cfcd572e8cb5b11cf874e177bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrpHghuzlrzD3Zizkui9TmEQR2loujBXpOOJKJPAkXVaJ5yJd71bYwl6n9lvcHLaygZ0bxCE~EyPUqtCoAWxg6MPfPsWxhxHDnJJd0I12X8Fa0yUBGOtBKbOTWFbCxSGJekdGjlxWn0W0et2ssAhi1cfvB4nf9jEbeyjYWr0c9a1UbJXTVnweMcBpR5CyZncrE16vxyChqW4nOuoHBBYMwoAt3mcHCJLmUD9YWHpPJ4LHs929JqAcVrtDharTObA2-Lc9celqfnUBfyItITOPFx3jiU-I18Vuimouv5PFUKMEEVZJcwnaqxAkda5RD1vl051XECLs9Z3Le3-lGhBYQ__",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://s3-alpha-sig.figma.com/img/3439/6530/8acf15d1df495154d0cef2fb7c483ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGU7z6Hv8rSQFwZzjVmN4SggzInV-RrjwRezpaJfP83zRbawwgVIV2Apl3g1HM6n6rbGZJQKVPagGqqDiOllNbjeOxjs5KxEs9xbEB2vDS2MpigP1877t0UZn8ElVJmuJMb2Os2QsWX5M3HilAxcEho1uPAYHBigo9kCCMuNDDzq8Ldag4GODjthsV19TvSLvntRXIvnEHRtb~uQ8KrScz0nYZgNfRM0ljQ6R-gPu-rO1773-6jmoWsG6Y4c3G5P-ZgWi-0K6OnUBzfqCzoLRjSGKBNrY9JPTQZHZ6N-ADM9gTID8JgZB4icvpgII4Cjspj8LTvcuimoSm-rNVYllw__",
      icon: "https://s3-alpha-sig.figma.com/img/bb26/9b11/a69804cfcd572e8cb5b11cf874e177bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrpHghuzlrzD3Zizkui9TmEQR2loujBXpOOJKJPAkXVaJ5yJd71bYwl6n9lvcHLaygZ0bxCE~EyPUqtCoAWxg6MPfPsWxhxHDnJJd0I12X8Fa0yUBGOtBKbOTWFbCxSGJekdGjlxWn0W0et2ssAhi1cfvB4nf9jEbeyjYWr0c9a1UbJXTVnweMcBpR5CyZncrE16vxyChqW4nOuoHBBYMwoAt3mcHCJLmUD9YWHpPJ4LHs929JqAcVrtDharTObA2-Lc9celqfnUBfyItITOPFx3jiU-I18Vuimouv5PFUKMEEVZJcwnaqxAkda5RD1vl051XECLs9Z3Le3-lGhBYQ__",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://s3-alpha-sig.figma.com/img/3439/6530/8acf15d1df495154d0cef2fb7c483ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGU7z6Hv8rSQFwZzjVmN4SggzInV-RrjwRezpaJfP83zRbawwgVIV2Apl3g1HM6n6rbGZJQKVPagGqqDiOllNbjeOxjs5KxEs9xbEB2vDS2MpigP1877t0UZn8ElVJmuJMb2Os2QsWX5M3HilAxcEho1uPAYHBigo9kCCMuNDDzq8Ldag4GODjthsV19TvSLvntRXIvnEHRtb~uQ8KrScz0nYZgNfRM0ljQ6R-gPu-rO1773-6jmoWsG6Y4c3G5P-ZgWi-0K6OnUBzfqCzoLRjSGKBNrY9JPTQZHZ6N-ADM9gTID8JgZB4icvpgII4Cjspj8LTvcuimoSm-rNVYllw__",
      icon: "https://s3-alpha-sig.figma.com/img/bb26/9b11/a69804cfcd572e8cb5b11cf874e177bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrpHghuzlrzD3Zizkui9TmEQR2loujBXpOOJKJPAkXVaJ5yJd71bYwl6n9lvcHLaygZ0bxCE~EyPUqtCoAWxg6MPfPsWxhxHDnJJd0I12X8Fa0yUBGOtBKbOTWFbCxSGJekdGjlxWn0W0et2ssAhi1cfvB4nf9jEbeyjYWr0c9a1UbJXTVnweMcBpR5CyZncrE16vxyChqW4nOuoHBBYMwoAt3mcHCJLmUD9YWHpPJ4LHs929JqAcVrtDharTObA2-Lc9celqfnUBfyItITOPFx3jiU-I18Vuimouv5PFUKMEEVZJcwnaqxAkda5RD1vl051XECLs9Z3Le3-lGhBYQ__",
    },
    {
      range: "₹73.66L - 75.03 L",
      location: "Located at Delhi",
      bedroomtext: "2 Bed Rooms",
      bathroomtext: "4 Bathrooms",
      imgPath:
        "https://s3-alpha-sig.figma.com/img/3439/6530/8acf15d1df495154d0cef2fb7c483ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGU7z6Hv8rSQFwZzjVmN4SggzInV-RrjwRezpaJfP83zRbawwgVIV2Apl3g1HM6n6rbGZJQKVPagGqqDiOllNbjeOxjs5KxEs9xbEB2vDS2MpigP1877t0UZn8ElVJmuJMb2Os2QsWX5M3HilAxcEho1uPAYHBigo9kCCMuNDDzq8Ldag4GODjthsV19TvSLvntRXIvnEHRtb~uQ8KrScz0nYZgNfRM0ljQ6R-gPu-rO1773-6jmoWsG6Y4c3G5P-ZgWi-0K6OnUBzfqCzoLRjSGKBNrY9JPTQZHZ6N-ADM9gTID8JgZB4icvpgII4Cjspj8LTvcuimoSm-rNVYllw__",
      icon: "https://s3-alpha-sig.figma.com/img/bb26/9b11/a69804cfcd572e8cb5b11cf874e177bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrpHghuzlrzD3Zizkui9TmEQR2loujBXpOOJKJPAkXVaJ5yJd71bYwl6n9lvcHLaygZ0bxCE~EyPUqtCoAWxg6MPfPsWxhxHDnJJd0I12X8Fa0yUBGOtBKbOTWFbCxSGJekdGjlxWn0W0et2ssAhi1cfvB4nf9jEbeyjYWr0c9a1UbJXTVnweMcBpR5CyZncrE16vxyChqW4nOuoHBBYMwoAt3mcHCJLmUD9YWHpPJ4LHs929JqAcVrtDharTObA2-Lc9celqfnUBfyItITOPFx3jiU-I18Vuimouv5PFUKMEEVZJcwnaqxAkda5RD1vl051XECLs9Z3Le3-lGhBYQ__",
    },
  ];

  return (
    <>
      <Box style={{ marginTop: "73px", padding: "60px 30px" }}>
        <Grid container spacing={2} style={{ display: "flex" }}>
          <Grid item lg={9} md={9} xs={12}>
            <Breadcrumb />
            <Typography variant="h5" fontWeight={700} mt={2}>
              Flats for Sale in Somalwada, Nagpur
            </Typography>
            <Grid container marginTop={"20px"}>
              <Grid item lg={4} md={4}>
                <Box
                  style={{
                    background: "#EAEAEA",
                    padding: "20px",
                    marginRight: "20px",
                  }}
                >
                  <Box>
                    <Typography className="filterheadings">
                      Find your home
                    </Typography>
                    <Box sx={{ width: 250, marginTop: "10px" }}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="What are you looking for?"
                            size="small"
                            sx={{
                              width: 250,
                              background: "#fff",
                              borderRadius: "4px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <SearchIcon
                                  style={{ marginRight: "8px", color: "grey" }}
                                />
                              ),
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>

                  <Box style={{ marginTop: "10px" }}>
                    <Typography className="filterheadings">
                      Property status
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="property-type"
                        name="property-type"
                        value={selectedStatus}
                        onChange={handlePropertyStatusClick}
                      >
                        {Propertystatus.map((propertystatus) => (
                          <FormControlLabel
                            key={propertystatus}
                            value={propertystatus}
                            control={<Radio className="radiobuttons" />}
                            label={propertystatus}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Property Type
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="property-type"
                        name="property-type"
                        value={selectedType}
                        onChange={handlePropertyTypeClick}
                      >
                        {propertyType.map((propertytype) => (
                          <FormControlLabel
                            key={propertytype}
                            value={propertytype}
                            control={<Radio className="radiobuttons" />}
                            label={propertytype}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Price Range
                    </Typography>
                    <Box sx={{ width: 230 }}>
                      <Slider
                        getAriaLabel={() => "Area range"}
                        value={price}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuePricetext}
                        min={0}
                        max={150000}
                        marks={pricemarks}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">BHK Type</Typography>
                    <Box sx={{ width: 250, marginTop: "10px" }}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={BHK}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="BHK Type"
                            size="small"
                            sx={{
                              width: 250,
                              background: "#fff",
                              borderRadius: "4px",
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Bathrooms
                    </Typography>
                    <Box sx={{ width: 250, marginTop: "10px" }}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Bathroom}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Bathrooms"
                            size="small"
                            sx={{
                              width: 250,
                              background: "#fff",
                              borderRadius: "4px",
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Built Up Area (Sq.Ft.)
                    </Typography>
                    <Box sx={{ width: 230 }}>
                      <Slider
                        getAriaLabel={() => "Area range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={5000}
                        step={100}
                        marks={marks}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Sale Types
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="property-type"
                        name="property-type"
                        value={selectedSaleType}
                        onChange={handlePropertysaleTypeClick}
                      >
                        {saleType.map((saletype) => (
                          <FormControlLabel
                            key={saletype}
                            value={saletype}
                            control={<Radio className="radiobuttons" />}
                            label={saletype}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Fab
                      disabled
                      aria-label="like"
                      style={{
                        height: "20px",
                        width: "35px",
                        background: "#fff",
                        marginTop: "5px",
                      }}
                    >
                      <TocOutlinedIcon />
                    </Fab>
                    <Box style={{ marginLeft: "10px" }}>
                      <Typography className="filterheadings">
                        Other Features
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Possession Status
                    </Typography>
                    <Box sx={{ width: 250, marginTop: "10px" }}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={PossessionStatus}
                        sx={{
                          width: 250,
                          background: "#fff",
                          borderRadius: "4px",
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="In 1 year"
                            size="small"
                            sx={{ width: 250 }}
                          />
                        )}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Property Post By
                    </Typography>
                    <Box style={{ marginTop: "10px" }}>
                      {options.map((option) => (
                        <Button
                          key={option}
                          onClick={() => handleButtonClick(option)}
                          style={{
                            backgroundColor:
                              option === selectedOption ? "blue" : "white",
                            color:
                              option === selectedOption ? "white" : "black",
                            border:
                              option === selectedOption
                                ? "1px solid blue"
                                : "1px solid #8E8E8E",
                            marginRight: "10px",
                            marginBottom: "10px",
                            textTransform: "none",
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">Verified</Typography>
                    <Button
                      style={{
                        border: "1px solid #8E8E8E",
                        textTransform: "none",
                        backgroundColor: "#fff",
                        color: "#000",
                        marginTop: "10px",
                      }}
                    >
                      Verified
                    </Button>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Amenities
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="property-type"
                        name="property-type"
                        value={selectedAmminities}
                        onChange={handleAmminitiesChange}
                      >
                        {Aminities.map((aminities) => (
                          <FormControlLabel
                            key={aminities}
                            value={aminities}
                            control={<Radio className="radiobuttons" />}
                            label={aminities}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography className="filterheadings">
                      Age of Property
                    </Typography>
                    <Box style={{ marginTop: "10px" }}>
                      {ageofproperty.map((option) => (
                        <Button
                          key={option}
                          onClick={() => handleAgePropertyClick(option)}
                          style={{
                            backgroundColor:
                              option === selectedAgeProperty ? "blue" : "white",
                            color:
                              option === selectedAgeProperty
                                ? "white"
                                : "black",
                            border:
                              option === selectedAgeProperty
                                ? "1px solid blue"
                                : "1px solid #8E8E8E",
                            marginRight: "10px",
                            marginBottom: "10px",
                            textTransform: "none",
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography className="filterheadings">Facing</Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="property-type"
                        name="property-type"
                        value={selectedfacing}
                        onChange={handleFacingChange}
                      >
                        {Facing.map((facing) => (
                          <FormControlLabel
                            key={facing}
                            value={facing}
                            control={<Radio className="radiobuttons" />}
                            label={facing}
                            className="radiobuttons"
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>

                  <Box>
                    <Typography className="filterheadings">
                      Property Details
                    </Typography>
                    <Box style={{ marginTop: "10px" }}>
                      {propertydetails.map((option) => (
                        <Button
                          key={option}
                          onClick={() => handlePropertyClick(option)}
                          style={{
                            backgroundColor:
                              option === selectedPropertydetails
                                ? "blue"
                                : "white",
                            color:
                              option === selectedPropertydetails
                                ? "white"
                                : "black",
                            border:
                              option === selectedPropertydetails
                                ? "1px solid blue"
                                : "1px solid #8E8E8E",
                            marginRight: "10px",
                            marginBottom: "10px",
                            textTransform: "none",
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography className="filterheadings">
                      Rera Compliant
                    </Typography>
                    <Button
                      style={{
                        border: "1px solid #8E8E8E",
                        textTransform: "none",
                        backgroundColor: "#fff",
                        color: "#000",
                        marginTop: "10px",
                      }}
                    >
                      Rera Compliant
                    </Button>
                  </Box>

                  <Button
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                    className="freehousing_button"
                  >
                    Sell Your Property
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={8} md={8}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <Typography>Showing 1 – 10 of 15 results</Typography>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography pt={2} R mr={1}>
                      Sort by:
                    </Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={Relevance}
                      sx={{ width: 200, height: "20px" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Relevance" size="small" />
                      )}
                    />
                  </Box>
                </Box>
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                  {images.map((step, index) => (
                    <Grid item key={index} lg={6} md={6} sm={6} xs={12}>
                      <Card style={{ marginRight: "10px" }}>
                        {/* Your Card Content */}
                        <div style={{ position: "relative" }}>
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
                          <Avatar
                            src={step.icon}
                            style={{
                              position: "absolute",
                              top: "4%",
                              right: "6%",
                            }}
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
                                <BedroomChildOutlinedIcon
                                  style={{ color: "gray" }}
                                />{" "}
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
                                <BathtubOutlinedIcon
                                  style={{ color: "gray" }}
                                />{" "}
                                <span style={{ marginLeft: "5px" }}>
                                  {step.bathroomtext}
                                </span>
                              </Box>
                            </Box>
                          </Box>
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box style={{ background: "#F3F4F4", padding: "20px" }}>
              <Box>
                <Card sx={{ maxWidth: 465 }}>
                  <CardMedia
                    component="img"
                    image="https://s3-alpha-sig.figma.com/img/32bf/14dd/8c00c8b4d07f9d7b07405348ffc6a95e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBnhkBBJeuGh7F2rXjW-ZE8fJoHQSviVCqBaM9ZMjQJjMNqrJo918HwAE8QvAa~VpOMp-yTA3I2ERIu02tkLWsvXmwtE83YzOUzU1LJO8SuunvXvR1NWNe-sxpn~IR4wfkn6QtlPKJ7Dklrxmqy9Lcea0A19YGCbA9d1Ky7xt9Hq~GrPc1ySEslnA56s~dEtTsN4tEjUwuGHE9U6bDR2vZ9PUISCl-bNWHNhH8AxMOdmi2QO6t4KZp4zH6CwFpo9-eyipNy5mMQ5Lxj0cnnbjo26SCR7etDRCP69PdHJKhn9rYyIfhYv-miM~5kmtivIin7QP8Az733VibruU57OJg__"
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
                        <Typography
                          fontWeight={"600"}
                          style={{ fontSize: "1rem" }}
                        >
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography style={{ fontSize: "0.9rem" }}>
                          Located at Jamtha
                        </Typography>
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
                    sx={{ height: 110, width: "50%" }}
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
                        <Typography
                          variant="h6"
                          fontWeight={"600"}
                          style={{ fontSize: "0.8rem" }}
                        >
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography style={{ fontSize: "0.7rem" }}>
                          Located at Jamtha
                        </Typography>
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
                    sx={{ height: 110, width: "50%" }}
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
                        <Typography
                          variant="h6"
                          fontWeight={"600"}
                          style={{ fontSize: "0.8rem" }}
                        >
                          ₹24.40L-30.40L
                        </Typography>
                        <Typography style={{ fontSize: "0.7rem" }}>
                          Located at Jamtha
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
