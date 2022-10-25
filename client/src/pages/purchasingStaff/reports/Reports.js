import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreadcrumb,
  getRemoveBreadcrumb,
} from "../../../redux/breadcrumbApiCalls";
import { Link } from "react-router-dom";
import SearchComponent from "../../../components/search/Search";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getInventoryItems } from "../../../redux/inventoryItemApiCalls";
import { useHistory } from "react-router-dom";

const titleItem = [
  {
    item1: "Product ID",
    item2: "category",
    item3: "Product Name",
    item4: "Description",
    item5: "Total Quantity",
    item6: "Item List Report",
  },
];

const Reports = (props) => {
  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);
  const inventoryItemsDataCollection = useSelector((state) => state.inventoryItem.inventoryItems);
  const [age, setAge] = React.useState("");
  const [list, setList] = React.useState([]);
  const history = useHistory();
  const [itemHeader, setItemHeader] = React.useState(titleItem[0]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    breadcrumbs.map((item) => {
      if (item.link == "purchaseOrder") {
        getRemoveBreadcrumb(dispatch, "purchaseOrder");
      }
    });
    const setBreadcrumb = () => {
      getBreadcrumb(dispatch, {
        name: "Purchase Order",
        link: "purchaseOrder",
      });
    };
    setBreadcrumb();
  }, []);

  useEffect(() => {
    const getInventoryData = async () => {
      history.push("/purchaseStaff/reports");
      const inventoryDataStatus = getInventoryItems(dispatch);
      let itemDataNew = [];
      inventoryItemsDataCollection.map((item) => {
        itemDataNew.push({
          id: item.inventor_item_id,
          itemCode: `ITM-${item.inventor_item_id}`,
          productName: item.title,
          desc: item.description,
          quantity: item.totalQuantity,
          rate:item.category
        });
      });
      setList(itemDataNew);
    };
    getInventoryData();
  }, []);

  //   let list = [
  //     {
  //       id: "1234",
  //       itemCode: "4562",
  //       productName: "Yohan",
  //       desc: "Yeahhh",
  //       quantity: 456,
  //       rate: 45,
  //       amount: 562,
  //     },
  //     {
  //       id: "1234",
  //       itemCode: "4562",
  //       productName: "Yohan",
  //       desc: "Yeahhh",
  //       quantity: 456,
  //       rate: 45,
  //       amount: 562,
  //     },
  //     {
  //       id: "1234",
  //       itemCode: "4562",
  //       productName: "Yohan",
  //       desc: "Yeahhh",
  //       quantity: 456,
  //       rate: 45,
  //       amount: 562,
  //     },
  //   ];

  const handleChange = (event) => {
    setAge(event.target.value);
    if (event.target.value == "itemList") {
      setItemHeader(titleItem[0]);
    }
    // alert(event.target.value);
  };

  return (
    <div className="common">
      <div className="userList">
        <div className="top-container-material-request">
          <div className="top-contaier-button-material-request">
            {/* <Link to={`/${user}/newMaterialRequest`}> */}
            {/* <button className="color-contained-button">Create New</button> */}
            {/* </Link> */}

            <FormControl sx={{ minWidth: 170 }} size="small">
              <InputLabel id="demo-select-small">Select Report</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="itemList">
                  <em>Item List</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-center">
          <h1 className="font-bold uppercase tracking-wide text-3xl mb-3">
            {itemHeader.item6}
          </h1>
        </div>

        <div className="top-container-material-request">
          <div className="top-contaier-button-material-request font-bold">
            Location - Warehouse
          </div>
          <div className="top-container-search-material-request font-bold">
            {/* Date - (2022-10-01 - 2022-10-24) */}
          </div>
        </div>

        <div className="row gutters">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="table-responsive">
              <table
                className="table custom-table m-0"
                style={{
                  width: "100%",
                }}
              >
                <thead>
                  <tr>
                    <th>{itemHeader.item1}</th>
                    <th>{itemHeader.item2}</th>
                    <th>{itemHeader.item3}</th>
                    <th>{itemHeader.item4}</th>
                    <th>{itemHeader.item5}</th>
                  </tr>
                </thead>
                {list.map(
                  ({
                    id,
                    desc,
                    productName,
                    itemCode,
                    rate,
                    quantity,
                    amount,
                  }) => (
                    <React.Fragment key={id}>
                      <tbody>
                        <tr>
                          <td>{itemCode}</td>
                          <td>{rate}</td>
                          <td>{productName}</td>
                          <td>{desc}</td>
                          <td>{quantity}</td>
                        </tr>
                      </tbody>
                    </React.Fragment>
                  )
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
