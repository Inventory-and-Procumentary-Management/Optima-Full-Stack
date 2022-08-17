import { useEffect, useMemo, useState } from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useDispatch, useSelector } from "react-redux";
import "../pages.css";
import "./PurchaseStaffHome.css";

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
      { name: MONTHS[0], "Active User": 15 },
      { name: MONTHS[1], "Active User": 20 },
      { name: MONTHS[2], "Active User": 65 },
      { name: MONTHS[3], "Active User": 45 },
      { name: MONTHS[4], "Active User": 100 },
      { name: MONTHS[5], "Active User": 74 },
    ];
    setUserStats(data);
    console.log(userStats);

    let featureData = [
        {title:"No of Users", number:20, percentage:-1.4, isDowngrade:false, text:"Compared to last month"},
        {title:"No of Orders", number:40, percentage:+1.4, isDowngrade:true, text:"Compared to last month"},
        {title:"No of Users", number:20, percentage:-1.4, isDowngrade:false, text:"Compared to last month"},
    ];
    setFeaturedData(featureData);
  }, []);

  return (
    <div className="common">
      <div className="home">
        <FeaturedInfo data={featuredData} />
        <Charts
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        {/* <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div> */}
      </div>
    </div>
  );
};

export default PurchaseStaffHome;
