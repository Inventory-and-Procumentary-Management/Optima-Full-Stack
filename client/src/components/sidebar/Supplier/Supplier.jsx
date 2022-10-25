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

export default function PurchaseStaffSidebar() {
  const history = useHistory();
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
              <Link to="/SupplierHome" className="link">
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
      
              {/* <Link to="/purchaseStaff/payments" className="link">
                {history.push("/purchaseStaff/payments")}
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Payments
                </li>
              </Link> */}
             
              {/* <Link to="/reports" className="link">
                  <li className="sidebarListItem">
                    <Report className="sidebarIcon" />
                    Reports
                  </li>
                </Link>
                <Link to="/article" className="link">
                  <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    Articles
                  </li>
                </Link>
                <Link to="/email" className="link">
                  <li className="sidebarListItem">
                    <Email className="sidebarIcon" />
                    Send Email
                  </li>
                </Link> */}
              {/* <Link to="/post" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Posts
              </li>
            </Link> */}
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Products</h3>
            <ul className="sidebarList">
              <Link to="/supplier/Request_product" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Request Product
                </li>
              </Link>
              <Link to="/supplier/Product_details" className="link">
                {/* {history.push("/purchaseStaff/purchaseOrder")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Product
                </li>
              </Link>

              <Link to="/supplier/Requested_Product_details" className="link">
                {/* {history.push("/purchaseStaff/purchaseOrder")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Requested Products
                </li>
              </Link>
              
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Orders</h3>
            <ul className="sidebarList">
              <Link to="/supplier/Order_details" className="link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Order Details
                </li>
              </Link>

            </ul>
          </div>
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Invoices</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Invoices
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
          </div> */}
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Products</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Items & Pricing
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
          </div> */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Purchase</h3>
            <ul className="sidebarList">
            

              <Link to="/supplier/Supplier_invoices_details" className="link">
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Invoices
                </li>
              </Link>
              
              {/* <Link to="/supplier/Supplier_Invoices" className="link">
                <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                  Create Invoices
                </li>
              </Link> */}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </PerfectScrollbar>
    </div>
  );
}
