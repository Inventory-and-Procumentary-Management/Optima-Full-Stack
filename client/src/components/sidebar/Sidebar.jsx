import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Email,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import DashboardIcon from '@mui/icons-material/Dashboard';
import { useEffect } from "react";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  //check user who is....then send correct props for the particular dashboard
  const user = useSelector((state) => state.user.currentUser);

  // useEffect(()=>{
  //   if(user.userType === "purchasingStaff"){
  //     useNavigate
  //   }
  // },[]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <PerfectScrollbar>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                {/* <Link to="/" className="link">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link> */}
              
                <ListItemButton to={"/home"}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
                
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Inbox"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    Products
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Transactions
                </li>
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MailOutline className="sidebarIcon" />
                  Mail
                </li>
                <li className="sidebarListItem">
                  <DynamicFeed className="sidebarIcon" />
                  Feedback
                </li>
                <li className="sidebarListItem">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Messages
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
          </div>
        </List>
      </PerfectScrollbar>
    </div>
  );
}
