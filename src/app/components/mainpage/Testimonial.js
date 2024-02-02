import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

// Define your data as an array of objects
const testimonialData = [
  {
    name: "Imaran Ippagunta",
    location: "Daman",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8669/1cae/bda516b41b4fe21c68822ac3443e1157?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpBVYNkAp5CvShge2GqUKnPaH1rpxT4soUZ6FV5Bw0RjcQgf7mWBAa1TZeDXGZWxGQ5iiznHuDvEskOH7Daj6jHeqUJ7goB4ivLXOWsxx8ruHwbA3WJ3zG1APPmggVTHedRH1NXp9-k9xkgtKDeNoz45s6ZvchKh~j2XKsTEa0AMgJ3mbe9sGGmFxHGtZ4rrkQOajGC0dlq77jGOhOtiTDPWiLIajmDlBs9-UEYnOpkD29cNtzMWZkQEckH4Ek5nUuQdApeI3aJhflIKRL1MOSpiDbfzkat~9pVz~0zYPeGbl6Bde0CClJP8YQNgsoneDUOQKcHihm4SmFaxf0OUow__",
  },
  {
    name: "Aahnik Vibhuti",
    location: "Tirupur",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d552/896c/bb7993a654477961cdb6915b0ec315ed?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S6X7yGeZW0OpjZZjogLAslRSPKhD-3-lGNKJYbbiLjjaxVx~iVyTXPk5QUxuXdX~Yhs0mKFMgge4h3pikvhOjOAaJj2izAMPoOrZXru22Z8SHAWTwaZyuMEmGky70TLOr6VAyhV6T26UTX6b~2ysdYcSa73thA5z9fHT0pC-ydOwivWquCp9294PZEp3QBitJPnsfZGFGWrnRjl58vvON5J-naevX-mYfrX-GGJTJ66Hxf~TWdvsUlvn2IdO1UiXTJEPD96YPWwbYMubdvl~k9Q1EmKhuVLNZ2FR7eitbU7qJSKFVTMpBOqGrLHwLVJcAuKhUjTb1nmKMmiwJBUNPg__",
  },
  {
    name: "Tanay Narayan",
    location: "Port Blair",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0767/3cf1/5ca8ca274c18718f9eba4b6c439d7ac4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYWWQNjhEjMktJTIjteqU5YXda27~pLo9eYNpT28HSyRa0e1nNQd40nid-lqIQQ3hI4yL5WXe4bhPi-Ws~tglzBKom9Mdf68y5kALkOYGKyVzXkndd-IQCn~bC4RTtz87oIdCCkvG1v1ODnkgIJkJBPVaQXwKLunY56YE3vWrGzd7enqsngLubjtCdYBfQYGOmhXWT6euFp0PJE6zmVwq31oX8pJv36VXdQQXkOecti9vtQsXFqObSU1y9IkaCJF5m~z2V9EnA8Pzay6kIsMmVqgcIYUsEMD8PjbdYfbB46W7XsEFm7L7HnupnfjQc-yMO3fTQ1wl5hfsMInqJy2hQ__",
  },
  {
    name: "Ninarika Sachdev",
    location: "Vizianagaram",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4e82/fc6b/7f4c45cc5b9d7f89b10de54fee79e4e2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vho9j6duhaZUB2nlwICj4mrmC9XZXlbSTONU-bSotNnQdMAc~Rs5PeXjSWHiWiDATdq6kE8099j9GtgNIKIdY8smt-HXFtwPXGMjmB4e7shOKhZUI10Yzz~-EBzPLvgoe7aJnrMv7R8D5ObPC62hFA-PsWYcHwt~1ofZiPAvU77QAIOsmNWDYglB3-Y~u~RhijVb3v9p7v7kBo7NLVqE44lRuEnjAUVAp6j1b8F8j1HwURMsB4P8rwtWV4Fcq6slcoaefFsuZggLdVcOqec335H1u6qJX1vhmun6jDLLv-dRZGuKRe1Ps0rIjaOpS3RBBWUITKkJq2SfnLoslXd0Jg__",
  },
];

const testimonialResponse = [
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Testimonial() {
  const [ratingValue, setRatingValue] = React.useState(2);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const StyledTab = styled(Tab)(({ selected }) => ({
    backgroundColor: selected ? "black" : "transparent",
    border: "1px solid black",
    marginBottom: "10px",
    textTransform: "none",
    padding: "0",
    "& .MuiTab-root": {
      color: selected ? "#fff" : "black",
    },
  }));

  return (
    <Box sx={{ display: "flex", width: "100%", marginTop: "30px" }}>
      <Box sx={{ flexGrow: 1, width: "25%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable vertical tabs example"
          orientation="vertical"
          sx={{ width: "100%" }}
        >
          {testimonialData.map((testimonial, index) => (
            <StyledTab
              key={index}
              label={
                <Box
                  style={{
                    display: "flex",
                    width: "100%",

                    padding: "10px",
                  }}
                >
                  <Avatar alt={testimonial.name} src={testimonial.imageUrl} />
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "15px",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography>{testimonial.name}</Typography>
                    <Typography>{testimonial.location}</Typography>
                  </Box>
                </Box>
              }
              {...a11yProps(index)}
              selected={value === index}
            />
          ))}
        </Tabs>
      </Box>
      <Box className="review"></Box>
      <Box sx={{ flexGrow: 3 }} className="outertabs">
        {testimonialResponse.map((testimonial, index) => (
          <TabPanel
            key={index}
            value={value}
            index={index}
            dir={theme.direction}
          >
            <Box>
              <Rating name="read-only" value={ratingValue} readOnly />
              <Typography style={{ fontSize: "15px" }}>
                {testimonial.text}
              </Typography>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
