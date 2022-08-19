import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import config from "./config";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import SecondTopbar from "./components/secondTopbar/SecondTopbar";
import MaterialRequest from "./pages/purchasingStaff/materialRequest/MaterialRequest";
import PurchaseOrder from "./pages/purchasingStaff/purchaseOrder/PurchaseOrder";
import PurchaseInvoice from "./pages/purchasingStaff/purchaseInvoice/PurchaseInvoice";
import Product_details from "./components/Supplier_components/Product_details";
import Request_product from "./components/Supplier_components/Request_product";
import Supplier_Invoices from "./components/Supplier_components/Supplier_Invoices";
import DisplayInvoice from "./components/Supplier_components/DisplayInvoice";

const App = () => {
  return (
    <Router basename={config.basename}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route path="/ForgetPassword">
          <ForgetPassword />
        </Route> */}
        {/* {admin && ( */}
        <>
          <Topbar />
          
          <div className="container">
            
            <Sidebar />
            <div className="sub-container">
              <SecondTopbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/materialRequest">
                <MaterialRequest />
              </Route>
              <Route path="/purchaseOrder">
                <PurchaseOrder />
              </Route>
              <Route path="/purchaseInvoice">
                <PurchaseInvoice />
              </Route>
              <Route path="/supplier/Product_details">
                <Product_details />
              </Route>
              <Route path="/supplier/Request_product">
                <Request_product />
              </Route>

              <Route path="/supplier/Supplier_Invoices">
                <Supplier_Invoices />
              </Route>

              <Route path="/supplier/DisplayInvoice">
                <DisplayInvoice />
              </Route>
              {/* <Route path="/user/:userId">
                <User />
              </Route> */}
              </div>
          </div>
        </>
        {/* )} */}
      </Switch>
    </Router>
    );
};

export default App;