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
import { useHistory } from "react-router-dom";

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
import { useState } from "react";
import { useEffect } from "react";

export default function PurchaseStaffSidebar() {
  const history = useHistory();
  // const [sidebarActive,setSidebarActive] = useState(
  //   {
  //     "home":"active",
  //     "products":null,
  //     "orderSummary":null,
  //     "supplierDetails":null,
  //     "products":null,
  //     "products":null,
  //   }
  // );
  // useEffect(()=>{

  // },[]);
  //check user who is....then send correct props for the particular dashboard
  // React.useEffect(()=>{
  //   alert("Purchase Staff");
  // },[]);

  return (
    <div className="sidebar">
      <PerfectScrollbar>
        {/* <div className="sidebar"> */}
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/purchaseStaff" className="link">
                {/* {history.push("/purchaseStaff")} */}
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
              {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
              {/* <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link> */}
              <Link to="/purchaseStaff/productList" className="link">
                {/* {history.push("/purchaseStaff/productList")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              {/* <Link to="/purchaseStaff/payments" className="link">
                {history.push("/purchaseStaff/payments")}
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Payments
                </li>
              </Link> */}
              {/* <Link to="/purchaseStaff/orders" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Order Summary
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Supplier</h3>
            <ul className="sidebarList">
              <Link to="/purchaseStaff/supplierDetails" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Supplier Details
                </li>
              </Link>
              <Link to="/purchaseStaff/supplierItems" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Supplier Items
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Purchase</h3>
            <ul className="sidebarList">
              <Link to="/purchaseStaff/materialRequest" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Material Request
                </li>
              </Link>
              <Link to="/purchaseStaff/purchaseOrder" className="link">
                {/* {history.push("/purchaseStaff/purchaseOrder")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Purchase Order
                </li>
              </Link>
              <Link to="/purchaseStaff/purchaseInvoice" className="link">
                {/* {history.push("/purchaseStaff/purchaseInvoice")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Purchase Invoice
                </li>
              </Link>
              <Link to="/purchaseStaff/purchaseInvoice" className="link">
                {/* {history.push("/purchaseStaff/purchaseInvoice")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Request for Quatation
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Project</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Project
              </li>

              <Link to="/purchaseStaff/deliveries" className="link">
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Deliveries
                </li>
              </Link>
              <Link to="/purchaseStaff/reports" className="link">
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
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
