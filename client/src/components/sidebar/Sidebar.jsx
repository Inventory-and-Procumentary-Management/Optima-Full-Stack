import * as React from "react";
import { useEffect } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PurchaseStaffSidebar from "./PurchaseStaff/PurchaseStaff";
import PurchaseManagerSidebar from './PurchaseManager/PurchaseManager';
import AdministratorSidebar from './Administrator/Administrator';
import ProjectManagerSidebar from './ProjectManager/ProjectManager';
import SiteManagerSidebar from './SiteManager/SiteManager';
import SupplierSidebar from './Supplier/Supplier';
import WarehouseManagerSidebar from './WarehouseManager/WarehouseManager';

export default function Sidebar() {
  const [userType, setUserType] = React.useState(7);
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
        history.push("/");
        setUserType(0);
      } else if (item.name === "ROLE_PURCHASING_MANAGER") {
        //1
        history.push("/");
        setUserType(1);
      } else if (item.name === "ROLE_PURCHASING_STAFF") {
        //2
        history.push("/");
        setUserType(2);
      } else if (item.name === "ROLE_SITE_MANAGER") {
        //3
        history.push("/");
        setUserType(3);
      } else if (item.name === "ROLE_WAREHOUSE_MANAGER") {
        //4
        history.push("/");
        setUserType(4);
      } else if (item.name === "ROLE_SUPPLIER") {
        //5
        history.push("/");
        setUserType(5);
      } else if (item.name === "ROLE_PROJECT_MANAGER") {
        //6
        history.push("/");
        setUserType(6);
      }
    });
  }, []);

  return (
    <div>
      {userType === 0 ? (
        <AdministratorSidebar />
      ) : userType === 1 ? (
        <PurchaseManagerSidebar />
      ) : userType === 2 ? (
        <PurchaseStaffSidebar />
      ) : userType === 3 ? (
        <SiteManagerSidebar />
      ) : userType === 4 ? (
        <WarehouseManagerSidebar />
      ) : userType === 5 ? (
        <SupplierSidebar />
      ) : userType === 6 ? (
        <ProjectManagerSidebar />
      ) : (
        <></>
      )}
    </div>
  );
}
