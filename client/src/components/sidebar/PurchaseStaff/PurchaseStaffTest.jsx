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

export default function PurchaseStaffSidebarTest() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [open5, setOpen5] = React.useState(true);
  const [open6, setOpen6] = React.useState(true);
  const [open7, setOpen7] = React.useState(true);

  //check user who is....then send correct props for the particular dashboard
  // React.useEffect(()=>{
  //   alert("Purchase Staff");
  // },[]);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
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
                <Link to="/" className="link">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>

                <Link to="/home" className="link">
                  <ListItemButton sx={{ height: 40 }}>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </Link>

                <ListItemButton onClick={handleClick}>
                  <Link to="/" className="link">
                    <li className="sidebarListItem">
                      <LineStyle className="sidebarIcon" />
                      Home
                    </li>
                  </Link>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Purchase"
                    sx={{ pl: 0, textAlign: "left" }}
                  /> */}
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link to="/materialRequest" className="link">
                      {/* <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Material Request" />
                      </ListItemButton> */}
                      <ListItemButton sx={{ pl: 4 }}>
                        <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon" />
                          Home
                        </li>
                      </ListItemButton>
                    </Link>

                    <Link to="/purchaseOrder" className="link">
                      {/* <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Purchase Order" />
                      </ListItemButton> */}
                      <ListItemButton sx={{ pl: 4 }}>
                        <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon" />
                          Home
                        </li>
                      </ListItemButton>
                    </Link>

                    <Link to="/purchaseInvoice" className="link">
                      {/* <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Purchase Invoice" />
                      </ListItemButton> */}
                      <ListItemButton sx={{ pl: 4 }}>
                        <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon" />
                          Home
                        </li>
                      </ListItemButton>
                    </Link>

                    <Link to="/home" className="link">
                      {/* <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Request for Quatation" />
                      </ListItemButton> */}
                      <ListItemButton sx={{ pl: 4 }}>
                        <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon" />
                          Home
                        </li>
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClick1}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Invoices"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
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
                <ListItemButton onClick={handleClick2}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Items & Pricing"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
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
                <ListItemButton onClick={handleClick3}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Supplier"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
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

                <ListItemButton onClick={handleClick4}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Projects"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open4} timeout="auto" unmountOnExit>
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

                <ListItemButton onClick={handleClick5}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deliveries"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open5 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open5} timeout="auto" unmountOnExit>
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
                <ListItemButton onClick={handleClick6}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reports"
                    sx={{ pl: 0, textAlign: "left" }}
                  />
                  {open6 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open6} timeout="auto" unmountOnExit>
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
