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
import PurchaseStaffHome from "./pages/purchasingStaff/PurchaseStaffHome";
import ProductList from "./pages/purchasingStaff/products/productList/ProductList";
import ProductUpdate from "./pages/purchasingStaff/products/productUpdate/ProductUpdate";
import NewProduct from "./pages/purchasingStaff/products/newProduct/NewProduct";

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
              <Route exact path="/purchaseStaff">
                <PurchaseStaffHome />
              </Route>
              <Route path="/purchaseStaff/materialRequest">
                <MaterialRequest />
              </Route>
              <Route path="/purchaseStaff/purchaseOrder">
                <PurchaseOrder />
              </Route>
              <Route path="/purchaseStaff/purchaseInvoice">
                <PurchaseInvoice />
              </Route>
              <Route path="/purchaseStaff/productList">
                <ProductList />
              </Route>
              <Route path="/purchaseStaff/productUpdate/:productId">
                <ProductUpdate />
              </Route>
              <Route path="/purchaseStaff/newProduct">
                <NewProduct />
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