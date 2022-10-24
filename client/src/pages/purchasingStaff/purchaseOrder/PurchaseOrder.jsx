import { useEffect, useState } from "react";
import "../../pages.css";

import { DataGrid } from "@material-ui/data-grid";
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

  // useEffect(()=>{

  // },[]);

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
  const dataList = [];
  // id, desc,itemCode, quantity, rate, amount

  const setDataArray = (data)=>{
    data.map((item)=>{
      dataList.push(
        {id:item.id,
        itemCode:"PR-0001",
        productName:"Cement",
        desc:"Cement",
        quantity:200,
        rate:522,
        amount:156}
      );
    });
  }

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
                    setDataArray(params.row.id);
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
              />
            </div>
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
