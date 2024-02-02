import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesMain = [
  {
    imgpath:
      "https://s3-alpha-sig.figma.com/img/a2de/cd65/0a2b2c38fc6cee91ccd449e9a582c48c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbBBafQ9NaUTpoCvEPOJJ1OspAc3Yl1cjwJyAhmyXvU8ona5wuj6hf29lQtRq9zFEaPod5iHL95p64yvGTezJtWMXP~Qi1K0nYM7eSsO4cq~hNLzixERJS-CLcVMkQERFgTUcW2wbnluHBTWGZ3PFCX5Ho~ls3937MOS3~bw28IQkLRQB9r5rTNr0-Yx4wi-qq-HeMDSA8Iok1uNnbP1tdlZEITiVPrMua83uQxMPqV5tFZTDqxIiuivxE5LI14daOU9fxueJz1O0NEA4qD7EXpyCFeZCWNdJ0oIT75quIpeQhGT29fLba7lTYmiDjlAarYwx3VxRLseWoxttyt6PA__",
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

function MyComponent() {
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    afterChange: (index) => handleSlideChange(index),
  };

  const handleSlideChange = (index) => {
    const activeImage = imagesMain[index];
    setSelectedImage(activeImage);
  };

  return (
    <Box style={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Slider {...settings}>
            {imagesMain.map((image, index) => (
              <div key={index}>
                <img
                  src={image.imgpath}
                  alt={`Slider Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "430px",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid container item spacing={3} lg={12}>
          {imagesMain.map((image, index) => (
            <Grid
              item
              key={index}
              xs={3}
              lg={2}
              md={2}
              style={{
                width: "100%",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <img
                src={image.imgpath}
                alt={`Thumbnail Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "4px",
                  border: selectedImage === image ? "2px solid blue" : "",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyComponent;
