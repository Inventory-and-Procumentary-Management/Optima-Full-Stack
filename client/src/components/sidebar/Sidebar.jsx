import "./Sidebar.css";
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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <PerfectScrollbar>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
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
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/payments" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Payments
                </li>
              </Link>
              <Link to="/orders" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Orders
                </li>
              </Link>
              <Link to="/reports" className="link">
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
              </Link>
              {/* <Link to="/post" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Posts
              </li>
            </Link> */}
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
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
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
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
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
