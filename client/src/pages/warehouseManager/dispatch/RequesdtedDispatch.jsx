import React from "react";

import { useEffect, useState } from "react";
import "../../pages.css";

import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import {
  DeleteOutline,
  CancelOutlined,
  VisibilityOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

// import SweetAlert from "react-bootstrap-sweetalert";

import { useDispatch, useSelector } from "react-redux";
import { purchaseInvoiceData } from "../../../constants/DashboardData";

// import Button from "@mui/material/Button";
import SearchComponent from "../../../components/search/Search";

import BasicModalDispatch from "./BasicModalDispatch";
import { IconButton } from "@material-ui/core";
import axios from "axios";
import { getMaterialRequest } from "../../../redux/materialRequestApiCalls";
import { setAddSiteManagerItem } from "../../../redux/dispatchApiCalls";
import PrintInvoice from "../../purchaseManager/printPOs/PrintInvoice";

const RequesdtedDispatch = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user.userType);
  const [user, setUser] = useState("");
  const materialRequest = useSelector((state) =>
    state.materialRequest.materialRequests.filter(
      (x) => x.senderType == "Site Manager"
    )
  );
  const [details, setDeatails] = useState([]);

  const [show, setShow] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [list, setList] = useState([]);

  // const list = [
  //   { id: 1, desc: "Cement", quantity: 200 },
  //   { id: 2, desc: "Cement", quantity: 200 },
  //   { id: 3, desc: "Cement", quantity: 200 },
  // ];
  // console.log(userType);

  useEffect(() => {
    const selectRole = async () => {
      if (userType === "ROLE_PURCHASING_MANAGER") {
        setUser("purchaseManager");
      } else if (userType === "ROLE_PURCHASING_STAFF") {
        setUser("purchaseStaff");
      }

      // const getMaterialRequest = async () => {
      await getMaterialRequest(dispatch);

      setDeatails(materialRequest);
      console.log("Requested data: ", materialRequest);
      // };

      // getMaterialRequest();
    };
    selectRole();
  }, [dispatch]);

  const addData = (data) => {
    console.log(materialRequest.senderId);
    setAddSiteManagerItem(dispatch, data);
  };

  const setDataArray = (data) => {
    setList(data);
    let dataListNew = [];
    data.orderProducts.map((item) => {
      console.log(item);
      dataListNew.push({
        id: item.order_id,
        itemCode: item.inventoryItemId,
        productName: item.productName,
        desc: item.description,
        quantity: item.quantity,
        rate: item.itemPrice,
        amount: item.amount,
      });
    });
    console.log(dataList);
    setDataList(dataListNew);
  };

  const columns = [
    { field: "material_request_id", headerName: "Dispatch ID", width: 180 },
    // {
    //   field: "staffUsername",
    //   headerName: "Purchase Staff Name",
    //   width: 250,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img
    //           className="userListImg"
    //           src="https://res.cloudinary.com/midefulness/image/upload/v1661021417/OPTIMA/Login%20Images/construction-plans-with-yellow-helmet-drawing-tools-bluep_azokvo.jpg"
    //           alt="category Icon"
    //         />
    //         {params.row.staffUsername}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "senderType",
      headerName: "Site Manager",
      width: 270,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://res.cloudinary.com/midefulness/image/upload/v1657441685/samples/people/kitchen-bar.jpg"
              alt="category Icon"
            />
            {params.row.senderName}
          </div>
        );
      },
    },
    {
      field: "issueDate",
      headerName: "Recieve Date",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            
            {params.row.issueDate.slice(0, 10).replace("T", " ")}
          </div>
        );
      },
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            
            {params.row.issueDate.slice(0, 10).replace("T", " ")}
          </div>
        );
      },
    },
    //{ field: "issueDate", headerName: "Recieve Date", width: 180 },
    { field: "dueDate", headerName: "Due Date", width: 180 },
    // { field: "price", headerName: "Description", width: 200 },
    // { field: "currentQuantity", headerName: "Current Quantity", width: 200 },
    // { field: "requestQuantity", headerName: "Request Quantity", width: 200 },
    // {
    //   field: "isApprove",
    //   headerName: "Approve",
    //   width: 180,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <div className="productListItem">
    //           <div className="productListItemData">
    //             {params.row.status + " "}
    //           </div>

    //           {userType === "ROLE_WAREHOUSE_MANAGER" ? (
    //             params.row.isApprove ? (
    //               <ThumbUpAltOutlined
    //                 className="productListDelete"
    //                 style={{ color: "green" }}
    //                 onClick={() => {
    //                   // setProductApproveStatus(params.row.id, false, params.row);
    //                   // setApproveShow(true);
    //                 }}
    //               />
    //             ) : (
    //               <ThumbDownAltOutlined
    //                 className="productListDelete"
    //                 style={{ color: "red" }}
    //                 onClick={() => {
    //                   // setProductApproveStatus(params.row.id, true, params.row);
    //                   // setApproveShow(true);
    //                 }}
    //               />
    //             )
    //           ) : (
    //             <></>
    //           )}
    //         </div>
    //       </>
    //     );
    //   },
    // },
    // {
    //   field: "staus",
    //   headerName: "Status",
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
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            {!params.row.isCancel ? (
              <div>
                <VisibilityOutlined
                  style={{
                    color: "#bdba2c",
                    cursor: "pointer",
                    marginRight: 20,
                  }}
                  onClick={() => {
                    // setProductStatus(params.row.id, false);
                    // setApproveShow(true);
                    console.log(params.row);
                    setShow(false);
                    setDataArray(params.row);
                  }}
                />

                {/* <BasicModalDispatch
                    name={
                      <VisibilityOutlined
                        style={{
                          color: "#bdba2c",
                          cursor: "pointer",
                          marginRight: 20,
                        }}
                      />
                    }
                    topic={"Requested Stocks"}
                    supName={params.row.senderType}
                    reqId={params.row.material_request_id}
                    date={params.row.issueDate}
                    description={params.row.orderProducts}
                  /> */}

                <CancelOutlined
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => {
                    // setProductStatus(params.row.id, false);
                    // setApproveShow(true);
                  }}
                />
              </div>
            ) : (
              <button
                className="userListEdit"
                style={{ backgroundColor: "red" }}
                // onClick={() => {
                //     setUpdateShow(true);
                //     setCartId(params.row._id);
                //     setIsCancelStatus(true);
                //   }}
              >
                Request Received
              </button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="common">
      {show ? (
        <div className="userList">
          {/* <div className="top-container-material-request">
          <div
            className="top-contaier-button-material-request"
            style={{ visibility: "hidden" }}
          >
            <Link to={`/${user}/newMaterialRequest`}>
              <button className="color-contained-button">Create New</button>
            </Link>
          </div>
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div> */}
          <div className="bottom-container-material-request">
            <DataGrid
              rows={materialRequest}
              disableSelectionOnClick
              columns={columns}
              getRowId={(row) => row.material_request_id}
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
      ) : (
        <PrintInvoice
          ourName={"OPTIMA"}
          ourAddress={"161/A, Aggona, Malabe, Sri Lanka"}
          clientName={list.senderName}
          clientAddress={"497/A/1"}
          invoiceNum={list.material_request_id}
          invoiceDate={list.issueDate}
          dueDate={list.dueDate}
          // desc={"Sand"}
          // quantity={152}
          // price={50}
          // amount={300000}
          // list={list}
          list={dataList}
          // setList={}
          // notes={}
          title={"Material Dispatch"}
          flag={true}
        />
      )}
    </div>
  );
};

export default RequesdtedDispatch;
