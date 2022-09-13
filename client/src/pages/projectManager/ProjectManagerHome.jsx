import { useEffect, useMemo, useState } from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo_projectManager from "../../components/featuredInfo/FeaturedInfo_projectManager"
import { useDispatch, useSelector } from "react-redux";
import "../pages.css";
 import "./ProjectManagerStyle.css";
 import { Link } from "react-router-dom";

const PurchaseStaffHome = () => {
  const [userStats, setUserStats] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  //   const user = useSelector((state) => state.user.currentUser);

  

  useEffect(() => {

 

    let featureData = [
      {
        index: 1,
        title: "Ongoing Projects",
        number: 6,
        text: "",
      },
      {
        index: 2,
        title: "Completed Projects",
        number: 12,
        isDowngrade: true,
        text: "",
      },
      {
        index: 3,
        title: "All Projects",
        number: 18,
        text:""
      },
    ];
    setFeaturedData(featureData);
  }, []);

  return (
    <div className="common">
      <div className="home">
        <FeaturedInfo_projectManager data={featuredData} />
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