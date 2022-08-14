import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import { useHistory } from "react-router-dom";
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
import { useEffect } from "react";

import PurchaseStaffSidebar from "./PurchaseStaff/PurchaseStaff";
import PurchaseManagerSidebar from './PurchaseManager/PurchaseManager';
import AdministratorSidebar from './Administrator/Administrator';
import ProjectManagerSidebar from './ProjectManager/ProjectManager';
import SiteManagerSidebar from './SiteManager/SiteManager';
import SupplierSidebar from './Supplier/Supplier';
import WarehouseManagerSidebar from './WarehouseManager/WarehouseManager';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [userType, setUserType] = React.useState(0);
  // const navigation  = useNavigate();
  const history = useHistory();

  //check user who is....then send correct props for the particular dashboard
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    user.roles.map((item) => {
      console.log(item);
      if (item.name === "ROLE_ADMINISTRATOR") {
        // navigation("/home");
        //0
        history.push("/home");
        setUserType(0);
      } else if (item.name === "ROLE_PURCHASING_MANAGER") {
        //1
        history.push("/home");
        setUserType(1);
      } else if (item.name === "ROLE_PURCHASING_STAFF") {
        //2
        history.push("/home");
        setUserType(2);
      } else if (item.name === "ROLE_SITE_MANAGER") {
        //3
        history.push("/home");
        setUserType(3);
      } else if (item.name === "ROLE_WAREHOUSE_MANAGER") {
        //4
        history.push("/home");
        setUserType(4);
      } else if (item.name === "ROLE_SUPPLIER") {
        //5
        history.push("/home");
        setUserType(5);
      } else if (item.name === "ROLE_PROJECT_MANAGER") {
        //6
        history.push("/home");
        setUserType(6);
      }
    });
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      {userType == 0 ? (
        <AdministratorSidebar />
      ) : userType == 1 ? (
        <PurchaseManagerSidebar />
      ) : userType == 2 ? (
        <PurchaseStaffSidebar />
      ) : userType == 3 ? (
        <SiteManagerSidebar />
      ) : userType == 4 ? (
        <WarehouseManagerSidebar />
      ) : userType == 5 ? (
        <SupplierSidebar />
      ) : userType == 6 ? (
        <ProjectManagerSidebar />
      ) : (
        <></>
      )}
    </div>
  );
}
