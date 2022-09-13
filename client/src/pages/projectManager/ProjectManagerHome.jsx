import { useEffect, useMemo, useState } from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo_supplier from "../../components/featuredInfo/FeaturedInfo_supplier";
import { useDispatch, useSelector } from "react-redux";
import "../pages.css";
 import "./ProjectManagerStyle.css";
 import { Link } from "react-router-dom";

const PurchaseStaffHome = () => {
  const [userStats, setUserStats] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  //   const user = useSelector((state) => state.user.currentUser);

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
        title: "",
        number: 20,
        percentage: -1.4,
        isDowngrade: false,
        text: "",
      },
      {
        index: 2,
        title: "",
        number: 40,
        isDowngrade: true,
        text: "",
      },
      {
        index: 3,
        title: "",
        number: 5,
        text:""
      },
    ];
    setFeaturedData(featureData);
  }, []);

  return (
    <div className="common">
      <div className="home">
        <FeaturedInfo_supplier data={featuredData} />
        <br></br>
        <Link to="/projectManager/newsite" className="request-product-link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}               
                <button className="create-New-Project-btn">Create New Project</button>
              </Link>
        
        {/* <Charts
          data={userStats}
          title="Products Analytics"
          grid
          dataKey1="Cement"
          dataKey2="Sand"
        /> */}
        {/* <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div> */}
      </div>
    </div>
  );
};

export default PurchaseStaffHome;