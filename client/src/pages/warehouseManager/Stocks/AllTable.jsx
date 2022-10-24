import { useEffect, useState } from "react";
import "../../pages.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

// import SweetAlert from "react-bootstrap-sweetalert";

import { useDispatch, useSelector } from "react-redux";
import { inventoryData } from "../../../constants/DashboardData";

// import Button from "@mui/material/Button";
import SearchComponent from "../../../components/search/Search";

const columns = [
  { field: "_id", headerName: "Request ID", width: 160 },
  {
    field: "name",
    headerName: "Item Name",
    width: 220,
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
  { field: "type", headerName: "Unit of Messurement", width: 180 },
  { field: "recieve", headerName: "Request Date", width: 180 },
  { field: "expire", headerName: "Due Date", width: 180 },
  {
    field: "staus",
    headerName: "Status",
    width: 220,
    renderCell: (params) => {
      return (
        <>
          {params.row.status === "Pending" ? (
            <button
              // onClick={() => {
              //   setCartId(params.row._id);
              //   setStatus("Accepted");
              //   setShow(true);
              // }}
            >
              {params.row.status}
            </button>
          ) : params.row.status === "Accepted" ? (
            <button
              // onClick={() => {
              //     setCartId(params.row._id);
              //     setStatus("In Warehouse");
              //     setShow(true);
              //   }}
            >
              {/* {params.row.status} */}
              Recieved
            </button>
          ) : params.row.status === "In Warehouse" ? (
            <button
              // onClick={() => {
              //     setStatus("Shipped");
              //     setCartId(params.row._id);
              //     setShow(true);
              //   }}
            >
              {/* {params.row.status} */}
              Requested
            </button>
          ) : params.row.status === "Shipped" ? (
            <button
              // onClick={() => {
              //     setCartId(params.row._id);
              //     setStatus("Completed");
              //     setShow(true);
              //   }}
            >
              {params.row.status}
            </button>
          ) : params.row.status === "Completed" ? (
            <button
            >
              {params.row.status}
            </button>
          ) : (
            <button>
              {params.row.status}
            </button>
          )}
        </>
      );
    },
  },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 180,
//     renderCell: (params) => {
//       return (
//         <>
//           {!params.row.isCancel ? (
//             <button
//               className="userListEdit"
//               // onClick={() => {
//               //   setUpdateShow(true);
//               //   setCartId(params.row._id);
//               //   setIsCancelStatus(false);
//               // }}
//               style={{ backgroundColor: "red" }}
//             >
//               Cancel
//             </button>
//           ) : (
//             <button
//               className="userListEdit"
//               style={{ backgroundColor: "red" }}
//               // onClick={() => {
//               //     setUpdateShow(true);
//               //     setCartId(params.row._id);
//               //     setIsCancelStatus(true);
//               //   }}
//             >
//               Request Received
//             </button>
//           )}
//         </>
//       );
//     },
//   },
];

const AllTable = () => {
  return (
    <div >
      <div className="userListInventory">
        {/* <div className="top-container-material-request">
          
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div> */}
        <div className="bottom-container-material-request">
          <DataGrid
            rows={inventoryData}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={7}
            checkboxSelection
            autoHeight
            components={{ Toolbar: GridToolbar }}
            // componentsProps={{
            //   columnMenu: {
            //     background: "red",
            //     // counter: rows.length
            //   },
            // }}
          />
        </div>
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

export default AllTable;
