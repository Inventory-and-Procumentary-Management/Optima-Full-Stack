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

export default function SiteManagerSidebar() {
  const [open, setOpen] = React.useState(true);

  //check user who is....then send correct props for the particular dashboard
  React.useEffect(()=>{
    alert("Site Manager");
  },[]);

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
                    primary="Purchase"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Purchase"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Products</h3>
              <ul className="sidebarList">
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Items & Pricing"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Project</h3>
              <ul className="sidebarList">
              <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Supplier"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Projects"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deliveries"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Reports</h3>
              <ul className="sidebarList">
              <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reports"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Material Request" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Order" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Invoice" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} to={"/home"}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Request for Quatation" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </div>
          </div>
        </List>
      </PerfectScrollbar>
    </div>
  );
}
