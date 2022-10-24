import { useEffect, useMemo, useState } from "react";
import FeaturedInfo_projectManager from "../../../components/featuredInfo/FeaturedInfo_projectManager";
import { useDispatch, useSelector } from "react-redux";
 import "../ProjectManagerStyle.css";
 import { Link } from "react-router-dom";

import {
  deleteSite,
  getSite,
  updateSite,
} from "../../../redux/SiteApiCalls";

const SiteDetails = () => {

    const [userStats, setUserStats] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    // const user = useSelector((state) => state.user.currentUser);
     
    const dispatch = useDispatch();
    const Sites = useSelector((state) => state.site.sites);
    const userType = useSelector((state) => state.user.userType);
    const [deleteTrigger, setDeleteTrigger] = useState("");
   
   
    useEffect(() => {
      const getSites = async () => {
        await getSite(dispatch);
     
         console.log(Sites);
        // console.log(typeof(Supplierproducts))
   
        //console.log(userType);
      };
      getSites();
    }, [dispatch, deleteTrigger]);

  return (

    <div className="common">
      <div className="home">
        {/* <FeaturedInfo_projectManager data={featuredData} /> */}
        <div className="site-style">Sites</div>
        <div className="site-main">
          {Sites.map((site) => (
            <div className="site-labal-style">
              <div>
            <p>Site Name: {site.siteName}</p>
            <p>Site Location Link: {site.location}</p>
            <p>Site Address: {site.address}</p>
            <p>Site Start: {site.startDate}</p>
            <p>Site End: {site.endDate}</p>
            </div>
            </div>
          ))}
          {/* {Sites.map(site=> <li>{site}</li>)} */}
        </div>
        <br></br>
    
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
    
  )
}

export default SiteDetails