import "../Sidebar.css";
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

import DashboardIcon from "@mui/icons-material/Dashboard";

export default function ProjectManagerSidebar() {
  const [open, setOpen] = React.useState(true);

  //check user who is....then send correct props for the particular dashboard
  React.useEffect(()=>{
    alert("Project Manager");
  },[]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <PerfectScrollbar>
        {/* <div className="sidebar"> */}
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/projectManager" className="link">
                {/* {history.push("/purchaseStaff")} */}
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              
              
             
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Details</h3>
            <ul className="sidebarList">
              <Link to="/projectManager/siteDetails" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Site Details
                </li>
              </Link>
              <Link to="/projectManager/inventory" className="link">
                {/* {history.push("/purchaseStaff/purchaseOrder")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Inventory
                </li>
              </Link>
              
            </ul>
          </div>

        </div>
        {/* </div> */}
      </PerfectScrollbar>
    </div>
  );
}
