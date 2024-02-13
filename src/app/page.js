// import HeaderComponent from "./components/HeaderComponent";
// import HeaderComponent from "./components/header/headerComponent";
import { Box } from "@mui/material";
import FooterComponent from "./components/FooterComponet";
import HeaderComponent from "./components/HeaderComponent";
import SingleProperty from "./(auth)/singleProperty/page";
import Main from "./components/mainpage/mainpage";

export default function Home() {




  return (
    <>
      {/* <HeaderComponent /> */}
      <Box style={{ background: "#FCFDFE" }}>
        <HeaderComponent />
        {/* <SingleProperty /> */}
        <Main />
        <FooterComponent />
      </Box>
    </>
  );
}
