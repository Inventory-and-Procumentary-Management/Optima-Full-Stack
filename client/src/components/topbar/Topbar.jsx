import "./Topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import Avatar from "@mui/material/Avatar";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  const dispatch = useDispatch();
  const logOutPress = () => {
    dispatch(logout());
    window.location.href = "http://localhost:3000/login";
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">OPTIMA</span> */}
          <img className="logo" src="https://res.cloudinary.com/midefulness/image/upload/v1660219961/OPTIMA/logo/optima-new_povspk.png" alt="logo" />
        </div>
        {/* <div className="topLeft">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div> */}

        <div className="topRight">
          <div className="topbarIconContainer">
            <Search sx={{ backgroundColor: "grey" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone className="topbarItems" />
            <span className="topIconBadge">2</span>
          </div>
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <ExitToApp onClick={logOutPress} className="topbarItems" />
          </div>

          <div className="topbarIconContainer" style={{paddingLeft:10}}>
            <Avatar
              alt="Profile"
              src="https://res.cloudinary.com/midefulness/image/upload/v1657441687/samples/people/smiling-man.jpg"
            />
          </div>
          {/* <img src="https://gravatar.com/avatar/088f07bdd6c610288af7a2b072dfd8c3?s=400&d=robohash&r=x" alt="" className="topAvatar" /> */}
          <div className="topbarIconContainer">
            <Settings onClick={logOutPress} className="topbarItems" />
          </div>
        </div>
      </div>
    </div>
  );
}
