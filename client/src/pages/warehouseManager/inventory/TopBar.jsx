//import React from 'react'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import TopBarTabs from "./TopBarTabs";

export default function TopBar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "black" }}>
          <TopBarTabs />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Building
          </Typography> */}
          <Link to="/AddProduct" className="link">
            <Button color="inherit" align="center">
              <AddIcon />
              ADD NEW
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
