import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "../FeaturedInfo.css";

const FeaturedItem = ({data}) => {
  console.log(data);
  console.log("Called");
  useEffect(()=>{
    alert("call una");
  },[]);
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{data.title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{data.number}</span>
        <span className="featuredMoneyRate">
          {/* {data.isDowngrade ? ( -1.4 <ArrowDownward className="featuredIcon negative" /> ) : -1.4 <ArrowDownward className="featuredIcon negative" />} */}
          {/* {Math.floor(data.percentage)}{" "} */}
          {data.percentage}{" "}
          {data.isDowngrade ? (
            <ArrowDownward className="featuredIcon negative" />
          ) : (
            <ArrowUpward className="featuredIcon" />
          )}
        </span>
      </div>
      <span className="featuredSub">{data.text}</span>
    </div>
  );
};

export default FeaturedItem;
