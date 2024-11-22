import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Drawer, Box, Button, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../Images/logo.png"; // Achte darauf, dass der Pfad zum Bild korrekt ist

const menuItems = [
  { text: "About", href: "#about" },
  { text: "Education", href: "#education" },
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skill" },
  { text: "Contact", href: "#contact" },
];

function Navbar({ toggleDarkMode, darkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 1201,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // This will ensure the menu is on the left and the avatar is on the right
        }}
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{ fontSize: { xs: "56px", sm: "58px" } }}
        >
          <MenuIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
        <Avatar alt="Logo" src={logo} sx={{ width: 50, height: 50 }} />
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          ".MuiDrawer-paper": {
            padding: 2,
            width: 250,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          },
        }}
      >
        <IconButton
          onClick={toggleDrawer}
          sx={{ fontSize: "50px", color: "gray", alignSelf: "flex-end" }}
        >
          <CloseIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component="a"
              href={item.href}
              sx={{ textTransform: "none", fontSize: "28px" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <Button onClick={toggleDarkMode}>
          <IconButton color="inherit" sx={{ fontSize: "36px" }}>
            {darkMode ? (
              <Brightness7Icon sx={{ fontSize: "inherit" }} />
            ) : (
              <Brightness4Icon sx={{ fontSize: "inherit" }} />
            )}
          </IconButton>
        </Button>
      </Drawer>
    </>
  );
}

export default Navbar;
