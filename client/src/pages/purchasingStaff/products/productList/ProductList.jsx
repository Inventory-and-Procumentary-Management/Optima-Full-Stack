import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import {
  DeleteOutline,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  EditOutlined,
  CancelOutlined,
  CheckOutlined,
  EditTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../../redux/productApiCalls";
import SearchComponent from "../../../../components/search/Search";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const userType = useSelector((state) => state.user.userType);
  const [show, setShow] = useState(false);
  const [approveShow, setApproveShow] = useState(false);
  const [approveStatus, setApproveStatus] = useState(false);
  const [productStatusNew, setProductStatusNew] = useState(false);
  const [productId, setProductId] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState("");
  const [allShow, setAllShow] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, deleteTrigger]);

  const deleteConfirm = async () => {
    setShow(false);
    deleteProduct(productId, dispatch);
    setDeleteTrigger("Delete"+deleteTrigger);
  };

  const deleteCancel = () => {
    setShow(false);
    setApproveShow(false);
  };

  const handleDelete = (id) => {
    setProductId(id);
    // setData(data.filter((item) => item.id !== id));
  };

  const priceChangeModel = (id) => {
    setProductId(id);
    setDeleteTrigger("price"+deleteTrigger);
    console.log(id);
  };
  const changeStockType = (id) => {
    setProductId(id);
    setDeleteTrigger("stock"+deleteTrigger);
    console.log(id);
  };
  const changeQuantity = (id) => {
    setProductId(id);
    setDeleteTrigger("change"+deleteTrigger);
    console.log(id);
  };
  const setMinimumLevel = (id) => {
    setProductId(id);
    setDeleteTrigger("minimum"+deleteTrigger);
    console.log(id);
  };
  const setProductStatus = (id, status) => {
    setProductId(id);
    setProductStatusNew(status);
    setDeleteTrigger("product"+deleteTrigger);
    // now activate -> status = false
    // now deactivate -> status = true
    console.log(id);
  };
  const setProductApproveStatus = (id, status, product) => {
    if (userType === "ROLE_PURCHASING_MANAGER") {
      setApproveStatus(status);
      setProductId(id);
      console.log(product);
      let { isApprove, ...others } = product;
      isApprove = status;
      setProduct({ isApprove, ...others });
    }else {
      console.log(id);
    }
    // now activate -> status = false
    // now deactivate -> status = true
  };
  const updateApproveConfirm = async () => {
    setApproveShow(false);
    console.log(product);
    await updateProduct(productId, product, dispatch);
    setDeleteTrigger("approve"+deleteTrigger);
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 220 },
    {
      field: "title",
      headerName: "Item",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "inStock",
      headerName: "Stock",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.inStock + " "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_WAREHOUSE_MANAGER" ? (
                <button
                  className="productListEdit"
                  style={{ backgroundColor: "#bdba2c" }}
                  onClick={() => changeStockType(params.row.id)}
                >
                  Set
                </button>
              ) : (
                <></>
              )}

              {/* </Link> */}
            </div>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price (Rs)",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">{params.row.price} </div>
              {userType === "ROLE_SUPPLIER" ? (
                <button
                  className="productListEdit"
                  onClick={() => priceChangeModel(params.row.id)}
                >
                  Change
                </button>
              ) : (
                <></>
              )}
            </div>
          </>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.quantity} {params.row.messure}{" "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_WAREHOUSE_MANAGER" ? (
                <button
                  className="productListEdit"
                  onClick={() => changeQuantity(params.row.id)}
                >
                  Change
                </button>
              ) : (
                <></>
              )}
              {/* </Link> */}
            </div>
          </>
        );
      },
    },
    {
      field: "minimumLevel",
      headerName: "Minimum Level",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.minimumLevel + " "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_PURCHASING_MANAGER" ? (
                <EditTwoTone
                  className="productListDelete"
                  style={{ color: "#bdba2c" }}
                  onClick={() => {
                    setMinimumLevel(params.row.id);
                    // setApproveShow(true);
                  }}
                />
              ) : (
                <></>
              )}
              {/* </Link> */}
            </div>
          </>
        );
      },
    },
    {
      field: "isActivate",
      headerName: "Activation",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.isActivate + " "}
              </div>

              {userType === "ROLE_PURCHASING_MANAGER" ? (
                params.row.isActivate ? (
                  <CheckOutlined
                    className="productListDelete"
                    style={{ color: "green" }}
                    onClick={() => {
                      setProductStatus(params.row.id, false);
                      // setApproveShow(true);
                    }}
                  />
                ) : (
                  <CancelOutlined
                    className="productListDelete"
                    style={{ color: "red" }}
                    onClick={() => {
                      setProductStatus(params.row.id, false);
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
      field: "isApprove",
      headerName: "Approve",
      width: 200,
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
                      setProductApproveStatus(params.row.id, false, params.row);
                      setApproveShow(true);
                    }}
                  />
                ) : (
                  <ThumbDownAltOutlined
                    className="productListDelete"
                    style={{ color: "red" }}
                    onClick={() => {
                      setProductApproveStatus(params.row.id, true, params.row);
                      setApproveShow(true);
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {userType === "ROLE_PURCHASING_MANAGER" ||
            userType === "ROLE_PURCHASING_STAFF" ? (
              <div>
                <Link to={"/purchaseStaff/productUpdate/" + params.row.id}>
                  {/* <button className="productListEdit">Edit</button> */}
                  <EditOutlined
                    className="productListDelete"
                    style={{ color: "green", marginRight: 20 }}
                  />
                </Link>
              </div>
            ) : (
              <></>
            )}
            {userType === "ROLE_PURCHASING_MANAGER" ? (
              <DeleteOutline
                className="productListDelete"
                onClick={() => {
                  handleDelete(params.row.id);
                  setShow(true);
                }}
              />
            ) : (
              <></>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="common">
      <div className="userList">
        <div className="top-container-material-request">
          <div className="top-contaier-button-material-request">
            <Link to={"/purchaseStaff/newProduct"}>
              <button className="color-contained-button">Add Item</button>
            </Link>
          </div>
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div>
        <div className="bottom-container-material-request">
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={7}
            checkboxSelection
            autoHeight
          />
        </div>
        
      </div>
    </div>
  );
}
