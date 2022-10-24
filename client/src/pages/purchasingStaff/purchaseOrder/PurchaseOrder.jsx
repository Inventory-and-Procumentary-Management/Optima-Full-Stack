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
import { purchaseOrderData } from "../../../constants/DashboardData";

// import Button from "@mui/material/Button";
import SearchComponent from "../../../components/search/Search";
import PrintInvoice from "../../purchaseManager/printPOs/PrintInvoice";
import { getBreadcrumb, getRemoveBreadcrumb } from "../../../redux/breadcrumbApiCalls";

const PurchaseOrder = () => {
  const userType = useSelector((state) => state.user.userType);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(true);
  console.log(userType);

  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);
  const dispatch = useDispatch();
  useEffect(() => {
    breadcrumbs.map((item)=>{
      if(item.link == "purchaseOrder"){
        getRemoveBreadcrumb(dispatch,"purchaseOrder");
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
    if (userType === "ROLE_PURCHASING_MANAGER") {
      setUser("purchaseManager");
    } else if (userType === "ROLE_PURCHASING_STAFF") {
      setUser("purchaseStaff");
    }
  }, []);

  const list = [
    { id: 1,itemCode:"PR-0001" ,productName:"Cement", desc: "Cement", quantity: 200, rate: 800, amount: 160000 },
    { id: 2,itemCode:"PR-0002" ,productName:"Cement", desc: "Cement", quantity: 200, rate: 800, amount: 160000 },
    { id: 3,itemCode:"PR-0003" ,productName:"Cement", desc: "Cement", quantity: 200, rate: 800, amount: 160000 },
  ];
  // id, desc,itemCode, quantity, rate, amount

  const columns = [
    { field: "invoice_id", headerName: "Invoice ID", width: 150 },
    {
      field: "staffUsername",
      headerName: "Purchase Staff Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://res.cloudinary.com/midefulness/image/upload/v1661021417/OPTIMA/Login%20Images/construction-plans-with-yellow-helmet-drawing-tools-bluep_azokvo.jpg"
              alt="category Icon"
            />
            {params.row.staffUsername}
          </div>
        );
      },
    },
    {
      field: "supplier",
      headerName: "Supplier",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://res.cloudinary.com/midefulness/image/upload/v1657441685/samples/people/kitchen-bar.jpg"
              alt="category Icon"
            />
            {params.row.supplier}
          </div>
        );
      },
    },
    { field: "issueDate", headerName: "Issue Date", width: 180 },
    { field: "dueDate", headerName: "Due Date", width: 180 },
    { field: "price", headerName: "Total Price (Rs)", width: 200 },
    // { field: "currentQuantity", headerName: "Current Quantity", width: 200 },
    // { field: "requestQuantity", headerName: "Request Quantity", width: 200 },
    {
      field: "isApprove",
      headerName: "Approve",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.isApprove + " "}
              </div>

              {userType === "ROLE_PURCHASING_MANAGER" ? (
                params.row.isApprove ? (
                  <ThumbUpAltOutlined
                    className="productListDelete"
                    style={{ color: "green" }}
                    onClick={() => {
                      // setProductApproveStatus(params.row.id, false, params.row);
                      // setApproveShow(true);
                    }}
                  />
                ) : (
                  <ThumbDownAltOutlined
                    className="productListDelete"
                    style={{ color: "red" }}
                    onClick={() => {
                      // setProductApproveStatus(params.row.id, true, params.row);
                      // setApproveShow(true);
                    }}
                  />
                )
              ) : (
                <></>
              )}
            </div>
          </>
        );
      },
    },
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
                    console.log("Hee");
                    setShow(false);
                  }}
                />
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
    <div>
      {show ? (
        <div className="common">
          <div className="userList">
            <div className="top-container-material-request">
              <div className="top-contaier-button-material-request">
                <Link to={`/${user}/newMaterialRequest`}>
                  <button className="color-contained-button">Create New</button>
                </Link>
              </div>
              <div className="top-container-search-material-request">
                <SearchComponent />
              </div>
            </div>
            <div className="bottom-container-material-request">
              <DataGrid
                rows={purchaseOrderData}
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
      ) : (
        <PrintInvoice
          ourName={"OPTIMA"}
          ourAddress={"161/A, Aggona, Malabe, Sri Lanka"}
          clientName={"Yohan"}
          clientAddress={"497/A/1 Susilarama Road Malabe"}
          invoiceNum={"Inv-123456"}
          invoiceDate={"2022-05-14"}
          dueDate={"2022-08-29"}
          // desc={"Sand"}
          // quantity={152}
          // price={50}
          // amount={300000}
          list={list}
          // setList={}
          // notes={}
          subTotal={1000}
          discount={25}
          tax={56}
          total={4565}
          title={"Purchase Order"}
          flag={false}
        />
      )}
    </div>
  );
};

export default PurchaseOrder;
