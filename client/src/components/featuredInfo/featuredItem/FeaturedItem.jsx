import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "../FeaturedInfo.css";

const FeaturedItem = (props) => {
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{props.title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{props.number}</span>
        <span className="featuredMoneyRate">
          {/* {props.isDowngrade ? ( -1.4 <ArrowDownward className="featuredIcon negative" /> ) : -1.4 <ArrowDownward className="featuredIcon negative" />} */}
          {/* {Math.floor(props.percentage)}{" "} */}
          {props.percentage}{" "}
          {props.isDowngrade ? (
            <ArrowDownward className="featuredIcon negative" />
          ) : (
            <ArrowUpward className="featuredIcon" />
          )}
        </span>
      </div>
      <span className="featuredSub">{props.text}</span>
    </div>
  );
};

export default FeaturedItem;
