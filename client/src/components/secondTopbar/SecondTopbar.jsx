import "./SecondTopbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect } from "react";
import { useState } from "react";
import { getRemoveBreadcrumb, getRemoveOneBreadcrumb } from "../../redux/breadcrumbApiCalls";

export default function SecondTopbar() {
  const dispatch = useDispatch();
  const breadcrumbData = useSelector((state) => state.breadcrumb.breadcrumbs);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const logOutPress = () => {
    dispatch(logout());
    window.location.href = "http://localhost:3000/login";
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  useEffect(() => {
    const setBreadcrumb = () => {
      // getRemoveOneBreadcrumb(dispatch);
      let data = [];
      let i = 0;
      breadcrumbData.map( (item) => {
        i = i+1;
        data.push(
          <Link
            underline="hover"
            key={i}
            color="inherit"
            href={`/${item.link}`}
            onClick={handleClick}
          >
            {item.name}
          </Link>
        )}
      );
      // getRemoveOneBreadcrumb(dispatch);

      setBreadcrumbs(data);
    };
    setBreadcrumb();
  }, [breadcrumbData]);

  // const breadcrumbs = [
  //   <Link
  //     underline="hover"
  //     key="1"
  //     color="inherit"
  //     href="/"
  //     onClick={handleClick}
  //   >
  //     Dashboard
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={handleClick}
  //   >
  //     Core
  //   </Link>,
  //   <Typography key="3" color="text.primary">
  //     Breadcrumb
  //   </Typography>,
  // ];

  return (
    <div className="second-topbar">
      <div className="second-topbarWrapper">
        <div className="second-topLeft">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>
        {/* <div className="second-topRight">
          <div className="second-topbarIconContainer">
            <NotificationsNone />
            <span className="second-topIconBadge">2</span>
          </div>
          <div className="second-topbarIconContainer">
            <Language />
            <span className="second-topIconBadge">2</span>
          </div>
          <div className="second-topbarIconContainer">
            <ExitToApp onClick={logOutPress} />
          </div>
          <img src="https://gravatar.com/avatar/088f07bdd6c610288af7a2b072dfd8c3?s=400&d=robohash&r=x" alt="" className="topAvatar" />
        </div> */}
      </div>
    </div>
  );
}
