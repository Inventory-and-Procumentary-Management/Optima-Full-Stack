import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useDispatch, useSelector } from "react-redux";
import "../pages.css";
import "./warehouseHome.css";
import { getRemoveAllBreadcrumb } from '../../redux/breadcrumbApiCalls';

const WarehouseHome = () => {
  const [userStats, setUserStats] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  //   const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const setBreadcrumb = () => {
      // breadcrumbs.map((item)=>{
      //   if(item.link == "purchaseStaff"){
      //     getRemoveBreadcrumb(dispatch,"purchaseStaff");
      //   }
      // });
      getRemoveAllBreadcrumb(dispatch, 
        {
          name: "Warehouse Manager",
          link: "warehouseManager",
        },
      );
    };
    setBreadcrumb();
  }, []);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    let data = [
      { name: MONTHS[0], "Cement": 15, "Sand": 12 },
      { name: MONTHS[1], "Cement": 20, "Sand": 25 },
      { name: MONTHS[2], "Cement": 65, "Sand": 78 },
      { name: MONTHS[3], "Cement": 45, "Sand": 30 },
      { name: MONTHS[4], "Cement": 100, "Sand": 80 },
      { name: MONTHS[5], "Cement": 74, "Sand": 90 },
    ];
    setUserStats(data);
    console.log(userStats);

    let featureData = [
      {
        index: 1,
        title: "No of Pending Stocks",
        number: 13,
        isDowngrade: false,
        text: "In this month",
      },
      {
        index: 2,
        title: "No of Dispatched Stocks",
        number: 11,
        isDowngrade: true,
        text: "In this month",
      },
      {
        index: 3,
        title: "No of Recieved Stocks",
        number: 5,
        isDowngrade: false,
        text: "In this month",
      },
    ];
    setFeaturedData(featureData);
  }, []);

  return (
    <div className="common">
      <div className="home">
        <FeaturedInfo data={featuredData} />
        <Charts
          data={userStats}
          title="Stocks Analytics"
          grid
          dataKey1="Cement"
          dataKey2="Sand"
          dataKey3="Sand1"
        />
        {/* <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div> */}
      {/* khygygy */}
      </div>
    </div>
  );
};

export default WarehouseHome;
