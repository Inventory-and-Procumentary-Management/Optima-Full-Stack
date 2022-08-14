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