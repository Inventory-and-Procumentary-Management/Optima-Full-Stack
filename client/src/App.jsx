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
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/users">
              <UserList />
            </Route> */}
            {/* <Route path="/user/:userId">
              <User />
            </Route> */}
          </div>
        </>
        {/* )} */}
      </Switch>
    </Router>
    );
};

export default App;