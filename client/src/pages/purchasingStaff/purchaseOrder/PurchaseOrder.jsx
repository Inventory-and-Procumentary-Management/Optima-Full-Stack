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
import {
  getBreadcrumb,
  getRemoveBreadcrumb,
} from "../../../redux/breadcrumbApiCalls";
import { getPurchaseOrders } from "../../../redux/purchaseOrderApiCalls";
import { useHistory } from "react-router-dom";

const PurchaseOrder = () => {
  const userType = useSelector((state) => state.user.userType);
  const userId = useSelector((state) => state.user.id);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(true);
  console.log(userType);
  const [dataList, setDataList] = useState([]);

  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);
  const purchaseOrderDetails = useSelector(
    (state) => state.purchaseOrder.purchaseOrders
  );
  // .filter((x) => x.senderId == userId)

  const dispatch = useDispatch();
  const history = useHistory();
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
    const getPurchaseOrderDetail = async () => {
      const statusPurchaseOrders = await getPurchaseOrders(dispatch);
      if (statusPurchaseOrders) {
        console.log(purchaseOrderDetails);
      } else {
        console.log("unsuccess");
      }
    };
    getPurchaseOrderDetail();
  }, []);

  useEffect(() => {
    history.push("/purchaseStaff/purchaseOrder");
    if (userType === "ROLE_PURCHASING_MANAGER") {
      setUser("purchaseManager");
    } else if (userType === "ROLE_PURCHASING_STAFF") {
      setUser("purchaseStaff");
    }
  }, []);

  const [subTotal, setSubTotal] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [tax, setTax] = useState([]);
  const [total, setTotal] = useState(0);

  const list = [
    {
      id: 1,
      itemCode: "PR-0001",
      productName: "Cement",
      desc: "Cement",
      quantity: 200,
      rate: 800,
      amount: 160000,
    },
    {
      id: 2,
      itemCode: "PR-0002",
      productName: "Cement",
      desc: "Cement",
      quantity: 200,
      rate: 800,
      amount: 160000,
    },
    {
      id: 3,
      itemCode: "PR-0003",
      productName: "Cement",
      desc: "Cement",
      quantity: 200,
      rate: 800,
      amount: 160000,
    },
  ];

  // id, desc,itemCode, quantity, rate, amount

  const setDataArray = (data) => {
    setTax(data);
    let dataListNew = [];
    var dataValue = 0;
    data.orderProducts.map((item) => {
      console.log(item);
      // purchaseOrderDetails.orderProducts.push({
      setSubTotal(subTotal + item.amount);
      setDiscountPrice(discountPrice + item.amount);
      dataValue = dataValue + item.quantity*item.itemPrice;
      
      dataListNew.push({
        id: item.order_id,
        itemCode: item.itemCode,
        productName: item.productName,
        desc: item.description,
        quantity: item.quantity,
        rate: item.itemPrice,
        amount: item.amount,
      });
    });
    setTotal(dataValue);
    setDataList(dataListNew);
  };

  const columns = [
    {
      field: "purchase_order_id",
      headerName: "Invoice ID",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">PO-{params.row.purchase_order_id}</div>
        );
      },
    },
    {
      field: "senderName",
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
            {params.row.senderName}
          </div>
        );
      },
    },
    {
      field: "receiverName",
      headerName: "Supplier",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img
              className="userListImg"
              src="https://res.cloudinary.com/midefulness/image/upload/v1657441685/samples/people/kitchen-bar.jpg"
              alt="category Icon"
            /> */}
            {params.row.receiverName}
          </div>
        );
      },
    },
    {
      field: "issueDate",
      headerName: "Issue Date",
      width: 180,
      renderCell: (params) => {
        let date3 = params.row.issueDate.slice(0, 10).replace("T", " ");
        return (
          <div className="userListUser">{date3}</div>
        );
      },
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 180,
      renderCell: (params) => {
        let date3 = params.row.dueDate.slice(0, 10).replace("T", " ");
        return (
          <div className="userListUser">{date3}</div>
        );
      },
    },
    // { field: "price", headerName: "Total Price (Rs)", width: 200 },
    // { field: "currentQuantity", headerName: "Current Quantity", width: 200 },
    // { field: "requestQuantity", headerName: "Request Quantity", width: 200 },
    {
      field: "status",
      headerName: "Approve",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.status + " "}
              </div>

              {userType === "ROLE_PURCHASING_MANAGER" ? (
                params.row.status ? (
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
            {/* {!params.row.isCancel ? (
              <div>
                
              </div>
            ) : (
              <button
                className="userListEdit"
                style={{ backgroundColor: "red" }}
              >
                Request Received
              </button>
            )} */}
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
                console.log(params.row);
                setDataArray(params.row);
              }}
            />
            <CancelOutlined
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                // setProductStatus(params.row.id, false);
                // setApproveShow(true);
              }}
            />
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
                rows={purchaseOrderDetails}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row.purchase_order_id}
                pageSize={7}
                checkboxSelection
                autoHeight
                components={{ Toolbar: GridToolbar }}

              />
            </div>
          </div>
        </div>
      ) : (
        // purchaseOrderDetails
        <PrintInvoice
          ourName={"OPTIMA"}
          ourAddress={"161/A, Aggona, Malabe, Sri Lanka"}
          clientName={tax.senderName}
          clientAddress={tax.receiverName}
          invoiceNum={`PO-${tax.purchase_order_id}`}
          invoiceDate={tax.issueDate}
          dueDate={tax.dueDate}
          // desc={"Sand"}
          // quantity={152}
          // price={50}
          // amount={300000}
          list={dataList}
          // setList={}
          // notes={}
          subTotal={total}
          discount={25}
          tax={56}
          total={total}
          title={"Purchase Order"}
          flag={false}
        />
      )}
    </div>
  );
};

export default PurchaseOrder;
