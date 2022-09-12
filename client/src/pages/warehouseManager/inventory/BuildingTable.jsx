import { useEffect, useState } from "react";
import "../../pages.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { inventoryData } from "../../../constants/DashboardData";
import SearchComponent from "../../../components/search/Search";

const columns = [
  // { field: "_id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Item Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {/* <img
            className="userListImg"
            src={params.row.img}
            alt="category Icon"
          /> */}
          {params.row.name}
        </div>
      );
    },
  },
  { field: "quantity", headerName: "Quantity", width: 160 },
  { field: "type", headerName: "Unit of Messurement", width: 180 },
  { field: "recieve", headerName: "Recieved Date", width: 180 },
  { field: "expire", headerName: "Expire Date", width: 180 },
  { field: "minimum", headerName: "Minimum Level", width: 180 },
  
  { field: "description", headerName: "Description", width: 200 },
  // {
  //   field: "staus",
  //   headerName: "Order Status",
  //   width: 220,
  //   renderCell: (params) => {
  //     return (
  //       <>
  //         {params.row.status === "Pending" ? (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "#bdba2c" }}
  //             // onClick={() => {
  //             //   setCartId(params.row._id);
  //             //   setStatus("Accepted");
  //             //   setShow(true);
  //             // }}
  //           >
  //             {params.row.status}
  //           </button>
  //         ) : params.row.status === "Accepted" ? (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "#87DD44" }}
  //             // onClick={() => {
  //             //     setCartId(params.row._id);
  //             //     setStatus("In Warehouse");
  //             //     setShow(true);
  //             //   }}
  //           >
  //             {params.row.status}
  //           </button>
  //         ) : params.row.status === "In Warehouse" ? (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "#DD9A44" }}
  //             // onClick={() => {
  //             //     setStatus("Shipped");
  //             //     setCartId(params.row._id);
  //             //     setShow(true);
  //             //   }}
  //           >
  //             {params.row.status}
  //           </button>
  //         ) : params.row.status === "Shipped" ? (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "#44A1DD" }}
  //             // onClick={() => {
  //             //     setCartId(params.row._id);
  //             //     setStatus("Completed");
  //             //     setShow(true);
  //             //   }}
  //           >
  //             {params.row.status}
  //           </button>
  //         ) : params.row.status === "Completed" ? (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "#69DD44" }}
  //           >
  //             {params.row.status}
  //           </button>
  //         ) : (
  //           <button className="userListEdit" style={{ backgroundColor: "red" }}>
  //             {params.row.status}
  //           </button>
  //         )}
  //       </>
  //     );
  //   },
  // },
  // {
  //   field: "action",
  //   headerName: "Action",
  //   width: 250,
  //   renderCell: (params) => {
  //     return (
  //       <>
  //         {!params.row.isCancel ? (
  //           <button
  //             className="userListEdit"
  //             // onClick={() => {
  //             //   setUpdateShow(true);
  //             //   setCartId(params.row._id);
  //             //   setIsCancelStatus(false);
  //             // }}
  //             style={{ backgroundColor: "#FFB000" }}
  //           >
  //             Update
  //           </button>
  //         ) : (
  //           <button
  //             className="userListEdit"
  //             style={{ backgroundColor: "red" }}
  //             // onClick={() => {
  //             //     setUpdateShow(true);
  //             //     setCartId(params.row._id);
  //             //     setIsCancelStatus(true);
  //             //   }}
  //           >
  //             Request Received
  //           </button>
  //         )}
  //       </>
  //     );
  //   },
  // },
];

const BuildingTable = () => {
  return (
    <div className="common">
      <div className="userList">
        <div className="top-container-material-request">
          <div className="top-contaier-button-material-request" style={{visibility:"hidden"}}>
            <Link to={"/purchaseStaff/newMaterialRequest"}>
              <button className="color-contained-button">Add New Item</button>
            </Link>
          </div>
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div>
        <DataGrid
          rows={inventoryData}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          checkboxSelection
          autoHeight
          // componentsProps={{
          //   columnMenu: {
          //     background: "red",
          //     // counter: rows.length
          //   },
          // }}
        />
        {/* <SweetAlert
          show={show}
          warning
          showCancel
          confirmBtnText="Yes, Update it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={orderUpdate}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>

        <SweetAlert
          show={updateShow}
          warning
          showCancel
          confirmBtnText="Yes, Cancel Order!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={() => {
            if (isCancelStatus === true) {
              updateConfirm("status", "Cancel");
            } else {
              updateConfirm("isCancel", true);
            }
          }}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert> */}

        {/* <SweetAlert
        show={allShow}
        success
        title="Successfully delete!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert> */}

        {/* <SweetAlert
          show={updateAllShow}
          success
          title="Request Send!"
          // text="SweetAlert in React"
          onConfirm={() => setUpdateAllShow(false)}
        ></SweetAlert> */}
      </div>
    </div>
  );
};

export default BuildingTable;
