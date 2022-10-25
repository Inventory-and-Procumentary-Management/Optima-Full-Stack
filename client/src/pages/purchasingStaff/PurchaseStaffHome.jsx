import { useEffect, useMemo, useState } from "react";
import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useDispatch, useSelector } from "react-redux";
import { countProduct } from "../../redux/productApiCalls";
import "../pages.css";
import "./PurchaseStaffHome.css";
import { getBreadcrumb, getRemoveAllBreadcrumb, getRemoveBreadcrumb } from "../../redux/breadcrumbApiCalls";

const PurchaseStaffHome = () => {
  const [userStats, setUserStats] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const dispatch = useDispatch();
  const inventoryCount = useSelector((state) => state.product.count);
  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);

  useEffect(() => {
    const setBreadcrumb = () => {
      // breadcrumbs.map((item)=>{
      //   if(item.link == "purchaseStaff"){
      //     getRemoveBreadcrumb(dispatch,"purchaseStaff");
      //   }
      // });
      getRemoveAllBreadcrumb(dispatch, 
        {
          name: "Purchase Staff",
          link: "purchaseStaff",
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
    const getCountInventoryData = async () => {
      await countProduct(dispatch);
    };

    getCountInventoryData();
  }, []);

  useEffect(() => {
    let data = [
      { name: MONTHS[0], Cement: 15, Sand: 12 },
      { name: MONTHS[1], Cement: 20, Sand: 25 },
      { name: MONTHS[2], Cement: 65, Sand: 78 },
      { name: MONTHS[3], Cement: 45, Sand: 30 },
      { name: MONTHS[4], Cement: 100, Sand: 80 },
      { name: MONTHS[5], Cement: 74, Sand: 90 },
    ];
    setUserStats(data);
    console.log(userStats);

    let featureData = [
      {
        index: 1,
        title: "No of Projects",
        number: 5,
        // percentage: -1.4,
        isDowngrade: false,
        text: "Compared to last month",
      },
      {
        index: 2,
        title: "New Inventory Items",
        number: inventoryCount,
        // percentage: +1.4,
        isDowngrade: true,
        text: "Compared to last month",
      },
      {
        index: 3,
        title: "Overdue Deliveries",
        number: 8,
        // percentage: -1.4,
        isDowngrade: false,
        text: "Compared to last month",
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
          title="Products Analytics"
          grid
          dataKey1="Cement"
          dataKey2="Sand"
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
