"use client";

import * as React from "react";
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
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { Avatar, Chip, Container } from "@mui/material";

import avtarimage from "../images/avtar.png";
import logo11 from "../logo11.png";
import Image from "next/image";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItem sx={{ textAlign: "center" }}>
            <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
              Dashboard
            </Button>
          </ListItem>
        </ListItem>
        <ListItem disablePadding>
          <ListItem sx={{ textAlign: "center" }}>
            <Box>
              <Button
                startIcon={<FavoriteBorderOutlinedIcon />}
                sx={{ color: "#3D3D3D", textTransform: "none" }}
              >
                Saved
              </Button>
            </Box>
          </ListItem>
        </ListItem>
        <ListItem disablePadding>
          <ListItem sx={{ textAlign: "center" }}>
            <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
              Blogs
            </Button>
          </ListItem>
        </ListItem>
        <ListItem disablePadding>
          <Button className="freehousing_button" style={{ width: "200px" }}>
            Add Your Property
          </Button>
        </ListItem>
        <ListItem>
          <Button
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
          </Button>
        </ListItem>
        <ListItem>
          <Button
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
              }}
            />
            Rupesh
          </Button>
        </ListItem>
      </List>
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List style={{ display: "flex" }}>
              <ListItem disablePadding>
                <Button
                  className="freehousing_button"
                  style={{ width: "200px" }}
                >
                  <DiamondOutlinedIcon /> Buy Subscription
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <ListItem sx={{ textAlign: "center" }}>
                  <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
                    Dashboard
                  </Button>
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem sx={{ textAlign: "center" }}>
                  <Box>
                    <Button
                      startIcon={<FavoriteBorderOutlinedIcon />}
                      sx={{ color: "#3D3D3D", textTransform: "none" }}
                    >
                      Saved
                    </Button>
                  </Box>
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <ListItem sx={{ textAlign: "center" }}>
                  <Button sx={{ color: "#3D3D3D", textTransform: "none" }}>
                    Blogs
                  </Button>
                </ListItem>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  className="freehousing_button"
                  style={{ width: "200px" }}
                >
                  Add Your Property
                </Button>
              </ListItem>
              <ListItem>
                <Button
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
                </Button>
              </ListItem>
            </List>
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

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
