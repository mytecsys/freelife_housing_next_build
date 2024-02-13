"use client";

import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Avatar, Chip, Container } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import avtarimage from "../images/avtar.png";
import logo11 from "../logo11.png";
import Image from "next/image";

const drawerWidth = 240;

function HeaderComponent(props) {
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JubyI6Ijg3ODgwOTcxODQiLCJ1c2VySWQiOiI2NWMwODYyZDkwNGQyOTYxOTUxYTk5YWQiLCJpYXQiOjE3MDc4MjcxOTMsImV4cCI6MTcwNzgzMDc5M30.7zDjr0EDho56A3Ar_rOo4iMwVWNFTKyMdnzla6A4aDg";
    localStorage.setItem("token", token);

    const property_id = "65c395682bed4672ef4b4512";
    localStorage.setItem("propertyId", property_id);
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userAuth, setUserAuth] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    const storedUserAuth = localStorage.getItem("userAuth");
    if (storedUserAuth) {
      setUserAuth(JSON.parse(storedUserAuth));
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("userAuth");
    setUserAuth(null);
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // You can implement your login logic here
    const userAuth = {
      name: "Rupesh",
      phoneNumber: "1234567890",
      email: "rupesh@example.com",
    };
    localStorage.setItem("userAuth", JSON.stringify(userAuth));
    setUserAuth(userAuth);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />

        <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
          Dashboard
        </Button>

        <Box>
          <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
            Saved
          </Button>
        </Box>
        <Box>
          <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
            Blogs
          </Button>
        </Box>

        <Button
          variant="contained"
          style={{ width: "200px", textTransform: "none" }}
        >
          Add Your Property
        </Button>

        {userAuth ? (
          <Button
            startIcon={
              <Avatar
                src={avtarimage}
                style={{ height: "25px", width: "25px" }}
              />
            }
            style={{
              background: "#0066AB1A",
              borderRadius: "40px",
              padding: "5px 15px",
              textTransform: "none",
              marginTop: "10px",
            }}
            onClick={handleMenuClick}
          >
            {userAuth.name}
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            startIcon={<LoginIcon />}
            style={{
              background: "#0066AB1A",
              borderRadius: "40px",
              padding: "5px 15px",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "#fff", color: "#3D3D3D" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image src={logo11} />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Box>
              <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
                Dashboard
              </Button>
            </Box>
            <Box>
              <Button
                startIcon={<FavoriteBorderOutlinedIcon />}
                sx={{ color: "#3D3D3D", textTransform: "none" }}
              >
                Saved
              </Button>
            </Box>
            <Box>
              <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
                Blogs
              </Button>
            </Box>
            <Box style={{ marginRight: "10px" }}>
              <Button
                variant="contained"
                style={{ width: "200px", textTransform: "none" }}
              >
                Add Your Property
              </Button>
            </Box>

            {userAuth ? (
              <Button
                startIcon={
                  <Avatar
                    src={avtarimage}
                    style={{ height: "25px", width: "25px" }}
                  />
                }
                style={{
                  background: "#0066AB1A",
                  borderRadius: "40px",
                  padding: "5px 15px",
                  textTransform: "none",
                  marginTop: "10px",
                }}
                onClick={handleMenuClick}
              >
                {userAuth.name}
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                startIcon={<LoginIcon />}
                style={{
                  background: "#0066AB1A",
                  borderRadius: "40px",
                  padding: "5px 15px",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            )}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            {/* <Button
              startIcon={<MenuOutlinedIcon />}
              style={{
                background: "#0066AB1A",
                borderRadius: "40px",
                padding: "5px 15px",
                textTransform: "none",
              }}
            >
              <Avatar
                src={avtarimage}
                style={{
                  height: "30px",
                  width: "30px",
                  marginRight: "7px",
                  textTransform: "none",
                }}
              />
              Rupesh
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

HeaderComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeaderComponent;

// "use client";

// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { Avatar, Chip, Container, ListItemIcon } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import LoginIcon from "@mui/icons-material/Login";

// import avtarimage from "../images/avtar.png";
// import logo11 from "../logo11.png";
// import Image from "next/image";

// const drawerWidth = 240;

// function HeaderComponent(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [userAuth, setUserAuth] = React.useState(null);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   React.useEffect(() => {
//     const storedUserAuth = localStorage.getItem("userAuth");
//     if (storedUserAuth) {
//       setUserAuth(JSON.parse(storedUserAuth));
//     }
//   }, []);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userAuth");
//     setUserAuth(null);
//     setAnchorEl(null);
//   };

//   const handleLogin = () => {
//     // You can implement your login logic here
//     const userAuth = {
//       name: "Rupesh",
//       phoneNumber: "1234567890",
//       email: "rupesh@example.com",
//     };
//     localStorage.setItem("userAuth", JSON.stringify(userAuth));
//     setUserAuth(userAuth);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         style={{ backgroundColor: "#fff", color: "#3D3D3D" }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             <Image src={logo11} />
//           </Typography>
//           <Box
//             sx={{
//               display: { xs: "none", sm: "flex" },
//               alignItems: "center",
//               justifyContent: "end",
//             }}
//           >
//             <Box>
//               <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
//                 Dashboard
//               </Button>
//             </Box>
//             <Box>
//               <Button
//                 startIcon={<FavoriteBorderOutlinedIcon />}
//                 sx={{ color: "#3D3D3D", textTransform: "none" }}
//               >
//                 Saved
//               </Button>
//             </Box>
//             <Box>
//               <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
//                 Blogs
//               </Button>
//             </Box>
//             <Box style={{ marginRight: "10px" }}>
//               <Button
//                 variant="contained"
//                 style={{ width: "200px", textTransform: "none" }}
//               >
//                 Add Your Property
//               </Button>
//             </Box>
//             {userAuth ? (
//               <Button
//                 startIcon={
//                   <Avatar
//                     src={avtarimage}
//                     style={{ height: "25px", width: "25px" }}
//                   />
//                 }
//                 style={{
//                   background: "#0066AB1A",
//                   borderRadius: "40px",
//                   padding: "5px 15px",
//                   textTransform: "none",
//                   marginTop: "10px",
//                 }}
//                 onClick={handleMenuClick}
//               >
//                 {userAuth.name}
//               </Button>
//             ) : (
//               <Button
//                 onClick={handleLogin}
//                 startIcon={<LoginIcon />}
//                 style={{
//                   background: "#0066AB1A",
//                   borderRadius: "40px",
//                   padding: "5px 15px",
//                   textTransform: "none",
//                 }}
//               >
//                 Login
//               </Button>
//             )}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleLogout}>
//                 <ListItemIcon>
//                   <LogoutIcon fontSize="small" />
//                 </ListItemIcon>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             <Image src={logo11} />
//           </Typography>
//           <Box
//             sx={{
//               display: { xs: "none", sm: "flex" },
//               alignItems: "center",
//               justifyContent: "end",
//             }}
//           >
//             <Box>
//               <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
//                 Dashboard
//               </Button>
//             </Box>
//             <Box>
//               <Button
//                 startIcon={<FavoriteBorderOutlinedIcon />}
//                 sx={{ color: "#3D3D3D", textTransform: "none" }}
//               >
//                 Saved
//               </Button>
//             </Box>
//             <Box>
//               <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
//                 Blogs
//               </Button>
//             </Box>
//             <Box style={{ marginRight: "10px" }}>
//               <Button
//                 variant="contained"
//                 style={{ width: "200px", textTransform: "none" }}
//               >
//                 Add Your Property
//               </Button>
//             </Box>
//             {userAuth ? (
//               <Button
//                 startIcon={
//                   <Avatar
//                     src={avtarimage}
//                     style={{ height: "25px", width: "25px" }}
//                   />
//                 }
//                 style={{
//                   background: "#0066AB1A",
//                   borderRadius: "40px",
//                   padding: "5px 15px",
//                   textTransform: "none",
//                   marginTop: "10px",
//                 }}
//                 onClick={handleMenuClick}
//               >
//                 {userAuth.name}
//               </Button>
//             ) : (
//               <Button
//                 onClick={handleLogin}
//                 startIcon={<LoginIcon />}
//                 style={{
//                   background: "#0066AB1A",
//                   borderRadius: "40px",
//                   padding: "5px 15px",
//                   textTransform: "none",
//                 }}
//               >
//                 Login
//               </Button>
//             )}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleLogout}>
//                 <ListItemIcon>
//                   <LogoutIcon fontSize="small" />
//                 </ListItemIcon>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// HeaderComponent.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default HeaderComponent;
