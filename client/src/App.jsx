import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import config from "./config";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/TopbarSupplier";
import SecondTopbar from "./components/secondTopbar/SecondTopbar";
import MaterialRequest from "./pages/purchasingStaff/materialRequest/MaterialRequest";
import PurchaseOrder from "./pages/purchasingStaff/purchaseOrder/PurchaseOrder";
import PurchaseInvoice from "./pages/purchasingStaff/purchaseInvoice/PurchaseInvoice";
import PurchaseStaffHome from "./pages/purchasingStaff/PurchaseStaffHome";
import ProductList from "./pages/purchasingStaff/products/productList/ProductList";
import ProductUpdate from "./pages/purchasingStaff/products/productUpdate/ProductUpdate";
import NewProduct from "./pages/purchasingStaff/products/newProduct/NewProduct";
import OrderSummary from "./pages/purchasingStaff/orderSummary/OrderSummary";
import NewMaterialRequest from "./pages/purchasingStaff/materialRequest/newMaterialRequest/NewMaterialRequest";
import AdministratorHome from "./pages/administrator/AdministratorHome";
import UserList from "./pages/administrator/users/userList/UserList";
import NewUser from "./pages/administrator/users/newUser/NewUser";
import NewSupplier from "./pages/administrator/users/newUser/NewSupplier";
import Delivery from "./pages/purchasingStaff/deliveries/Delivery";
import Inventory from "./pages/warehouseManager/inventory/Inventory";
import AddProduct from "./pages/warehouseManager/inventory/AddProduct/AddProduct";
import Stocks from "./pages/warehouseManager/Stocks/Stocks";
import WarehouseHome from "./pages/warehouseManager/WarehouseHome";
import Request_product from "./pages/Supplier/Request_product";
import PurchaseOrders from "./pages/purchaseManager/printPOs/PurchaseOrders";
import PurchaseManagerHome from "./pages/purchaseManager/PurchaseManagerHome";
import Supplier_Invoices from "./pages/Supplier/invoices/Supplier_Invoices";
import Supplier_invoices_details from "./pages/Supplier/invoices/Supplier_invoices_details";
import Product_details from "./pages/Supplier/Product/Product_details";
import Order_details from "./pages/Supplier/Orders/Order_details";
import SupplierHome from "./pages/Supplier/SupplierHome";

import Dispatch from "./pages/warehouseManager/dispatch/Dispatch";
import RequesdtedDispatch from "./pages/warehouseManager/dispatch/RequesdtedDispatch";
import SupplierDetails from "./pages/purchasingStaff/supplierDetails/SupplierDetails";
import SupplierItems from "./pages/purchasingStaff/supplierItems/SupplierItems";
import RequestForm from "./pages/warehouseManager/Stocks/RequestForm";
import ProfileSupplier from "./pages/Supplier/profile/ProfileSupplier";
import Request_new_product from "./pages/Supplier/Request_new_product";

const App = () => {
  return (
    <Router basename={config.basename}>
      <Switch>
        {/* <Redirect exact from="/" to="/login" /> */}
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
              <Route path="/purchaseStaff/newMaterialRequest">
                {/* <NewMaterialRequest /> */}
                <PurchaseOrders />
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
              <Route path="/purchaseStaff/orders">
                <OrderSummary />
              </Route>
              <Route path="/purchaseStaff/deliveries">
                <Delivery />
              </Route>
              <Route path="/purchaseStaff/supplierDetails">
                <SupplierDetails />
              </Route>
              <Route path="/purchaseStaff/supplierItems">
                <SupplierItems />
              </Route>

              <Route exact path="/admin">
                <AdministratorHome />
              </Route>
              <Route exact path="/admin/users">
                <UserList />
              </Route>
              <Route exact path="/admin/newUser">
                <NewUser />
              </Route>
              <Route exact path="/admin/newSupplier">
                <NewSupplier />
              </Route>

              <Route exact path="/warehouseManager">
                <WarehouseHome />
              </Route>
              <Route exact path="/warehouseManager/inventory">
                <Inventory />
              </Route>
              <Route exact path="/warehouseManager/AddProduct">
                <AddProduct />
              </Route>
              <Route exact path="/warehouseManager/Stocks">
                <Stocks />
              </Route>
              <Route exact path="/warehouseManager/Dispatch">
                <Dispatch />
              </Route>
              <Route exact path="/warehouseManager/requesdtedDispatch">
                <RequesdtedDispatch />
              </Route>
              <Route exact path="/warehouseManager/requestForm">
                 <RequestForm/>
              </Route>

              <Route exact path="/supplier/Request_product">
                <Request_product />
              </Route>

              <Route exact path="/supplier/Request_new_product">
                <Request_new_product />
              </Route>
              <Route exact path="/supplier/Supplier_Invoices">
                <Supplier_Invoices />
              </Route>
              <Route exact path="/supplier/Product_details">
                <Product_details />
              </Route>
              <Route exact path="/supplier/Order_details">
                <Order_details />
              </Route>
              <Route exact path="/supplierHome">
                <SupplierHome />
              </Route>
              <Route exact path="/supplier">
                <SupplierHome />
              </Route>
              <Route exact path="/supplier/Supplier_invoices_details">
                <Supplier_invoices_details />
              </Route>
              <Route exact path="/supplier/SupplierProfile">
                <ProfileSupplier />
              </Route>
              
              {/* <Route path="/users">
                <UserList />
              </Route> */}
              {/* <Route path="/user/:userId">
                <User />
              </Route> */}

              <Route exact path="/purchaseManager">
                <PurchaseManagerHome />
              </Route>
              <Route path="/purchaseManager/orders">
                <OrderSummary />
              </Route>
              <Route path="/purchaseManager/productList">
                <ProductList />
              </Route>
              <Route path="/purchaseManager/purchaseOrder">
                <PurchaseOrder />
              </Route>
              <Route path="/purchaseManager/newPurchaseOrders">
                <PurchaseOrders />
              </Route>
              <Route path="/purchaseManager/purchaseInvoice">
                <PurchaseInvoice />
              </Route>
              <Route path="/purchaseManager/materialRequest">
                <MaterialRequest />
              </Route>
              <Route path="/purchaseManager/newMaterialRequest">
                <PurchaseOrders />
              </Route>
            </div>
          </div>
        </>
        {/* )} */}
      </Switch>
    </Router>
  );
};

export default App;
