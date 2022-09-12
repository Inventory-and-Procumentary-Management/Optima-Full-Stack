import * as React from "react";
import { useEffect } from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import PurchaseStaffSidebar from "./PurchaseStaff/PurchaseStaff";
import PurchaseManagerSidebar from './PurchaseManager/PurchaseManager';
import AdministratorSidebar from './Administrator/Administrator';
import ProjectManagerSidebar from './ProjectManager/ProjectManager';
import SiteManagerSidebar from './SiteManager/SiteManager';
import SupplierSidebar from './Supplier/Supplier';
import WarehouseManagerSidebar from './WarehouseManager/WarehouseManager';
import { userTypeSave } from '../../redux/userRedux';

export default function Sidebar() {
  const [userType, setUserType] = React.useState(7);
  // const navigation  = useNavigate();
  const history = useHistory();
  const dispatch = useDispatch();

  //check user who is....then send correct props for the particular dashboard
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  useEffect(() => {
    user.roles.map((item) => {
      console.log(item);
      if (item.name === "ROLE_ADMINISTRATOR") {
        // navigation("/home");
        //0
        history.push("/admin");
        setUserType(0);
        dispatch(userTypeSave("ROLE_ADMINISTRATOR"));
      } else if (item.name === "ROLE_PURCHASING_MANAGER") {
        //1
        history.push("/purchaseManager");
        setUserType(1);
        dispatch(userTypeSave("ROLE_PURCHASING_MANAGER"));
      } else if (item.name === "ROLE_PURCHASING_STAFF") {
        //2
        history.push("/purchaseStaff");
        setUserType(2);
        dispatch(userTypeSave("ROLE_PURCHASING_STAFF"));
      } else if (item.name === "ROLE_SITE_MANAGER") {
        //3
        history.push("/siteManager");
        setUserType(3);
        dispatch(userTypeSave("ROLE_SITE_MANAGER"));
      } else if (item.name === "ROLE_WAREHOUSE_MANAGER") {
        //4
        history.push("/warehouseManager");
        setUserType(4);
        dispatch(userTypeSave("ROLE_WAREHOUSE_MANAGER"));
      } else if (item.name === "ROLE_SUPPLIER") {
        //5
        history.push("/supplier");
        setUserType(5);
        dispatch(userTypeSave("ROLE_SUPPLIER"));
      } else if (item.name === "ROLE_PROJECT_MANAGER") {
        //6
        history.push("/projectManager");
        setUserType(6);
        dispatch(userTypeSave("ROLE_PROJECT_MANAGER"));
      } else {
        window.location.href = "http://localhost:3000/login";
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
