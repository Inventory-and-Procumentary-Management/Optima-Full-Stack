import "./ProductList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
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

import Swal from "sweetalert2";

import SearchComponent from "../../../../components/search/Search";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { getBreadcrumb } from "../../../../redux/breadcrumbApiCalls";
import { useHistory } from "react-router-dom";

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
  const [product, setProduct] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const setBreadcrumb = () => {
      getBreadcrumb(dispatch, 
        {
          name: "Products",
          link: "productList",
        },
      );
    };
    setBreadcrumb();
  }, []);

  useEffect(() => {
    history.push("/purchaseStaff/productList");
    getProducts(dispatch);
  }, [dispatch, deleteTrigger]);

  const deleteConfirm = async (id) => {
    await deleteProduct(id, dispatch);
    setDeleteTrigger("Delete" + deleteTrigger);
  };

  const deleteCancel = () => {
    setShow(false);
    setApproveShow(false);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#378cbb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConfirm(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // setData(data.filter((item) => item.id !== id));
  };

  const priceChangeModel = (id) => {
    setProductId(id);
    setDeleteTrigger("price" + deleteTrigger);
    console.log(id);
  };
  const changeStockType = (id) => {
    setProductId(id);
    setDeleteTrigger("stock" + deleteTrigger);
    console.log(id);
  };
  const changeQuantity = (id) => {
    setProductId(id);
    setDeleteTrigger("change" + deleteTrigger);
    console.log(id);
  };
  const setMinimumLevel = (id) => {
    // setProductId(id);
    Swal.fire({
      title: "Enter new minimum level",
      input: "number",
      showCancelButton: true,
      confirmButtonText: "Update",
      confirmButtonColor: '#378cbb',
      showLoaderOnConfirm: true,
      inputPlaceholder: 'Minimum Level',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to add something!'
        }
      },
      preConfirm: (minQuantity) => {
        return updateProduct(id, { minQuantity: minQuantity }, dispatch);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "Minimum level has been updated.", "success");
        setDeleteTrigger("minimum" + deleteTrigger);
      } else {
        Swal.fire(
          "Updated fail!",
          "Minimum level has not been updated.",
          "error"
        );
      }
    });
  };
  const setMaximumLevel = (id) => {
    Swal.fire({
      title: "Enter new maximum level",
      input: "number",
      showCancelButton: true,
      confirmButtonText: "Update",
      confirmButtonColor: '#378cbb',
      showLoaderOnConfirm: true,
      inputPlaceholder: 'Maximum Level',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to add something!'
        }
      },
      preConfirm: (maxQuantity) => {
        return updateProduct(id, { maxQuantity: maxQuantity }, dispatch);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "Maximum level has been updated.", "success");
        setDeleteTrigger("maximum" + deleteTrigger);
      } else {
        Swal.fire(
          "Updated fail!",
          "Maximum level has not been updated.",
          "error"
        );
      }
    });
    
  };
  const setProductStatus = (id, status) => {
    // now activate -> status = false
    // now deactivate -> status = true
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#378cbb',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
      preConfirm: () => {
        return updateProduct(id, { isActivate: status }, dispatch);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Updated!',
          'Activation has been updated.',
          'success'
        )
        setDeleteTrigger("product" + deleteTrigger);
      }else {
        Swal.fire(
          "Updated fail!",
          "Activation has not been updated.",
          "error"
        );
      }
    })
  };
  const setProductApproveStatus = (id, status) => {
    // now activate -> status = false
    // now deactivate -> status = true
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#378cbb',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
      preConfirm: () => {
        return updateProduct(id, { isApprove: status }, dispatch);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Updated!',
          'Approve has been updated.',
          'success'
        )
        setDeleteTrigger("productApprove" + deleteTrigger);
      }else {
        Swal.fire(
          "Updated fail!",
          "Approve has not been updated.",
          "error"
        );
      }
    })
  };
  const updateApproveConfirm = async () => {
    setApproveShow(false);
    console.log(product);
    await updateProduct(productId, product, dispatch);
    setDeleteTrigger("approve" + deleteTrigger);
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
      field: "description",
      headerName: "Description",
      width: 220,
    },
    // {
    //   field: "inStock",
    //   headerName: "Stock",
    //   width: 120,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <div className="productListItem">
    //           <div className="productListItemData">
    //             {params.row.inStock + " "}
    //           </div>

    //           {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
    //           {userType === "ROLE_WAREHOUSE_MANAGER" ? (
    //             <button
    //               className="productListEdit"
    //               style={{ backgroundColor: "#bdba2c" }}
    //               onClick={() => changeStockType(params.row.id)}
    //             >
    //               Set
    //             </button>
    //           ) : (
    //             <></>
    //           )}

    //           {/* </Link> */}
    //         </div>
    //       </>
    //     );
    //   },
    // },
    // {
    //   field: "price",
    //   headerName: "Price (Rs)",
    //   width: 180,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <div className="productListItem">
    //           <div className="productListItemData">{params.row.price} </div>
    //           {userType === "ROLE_SUPPLIER" ? (
    //             <button
    //               className="productListEdit"
    //               onClick={() => priceChangeModel(params.row.id)}
    //             >
    //               Change
    //             </button>
    //           ) : (
    //             <></>
    //           )}
    //         </div>
    //       </>
    //     );
    //   },
    // },
    {
      field: "totalQuantity",
      headerName: "Quantity",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.totalQuantity} {params.row.uom}{" "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_WAREHOUSE_MANAGER" ? (
                <button
                  className="productListEdit"
                  onClick={() => changeQuantity(params.row.inventor_item_id)}
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
      field: "minQuantity",
      headerName: "Minimum Level",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.minQuantity + " "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_PURCHASING_MANAGER" ? (
                <EditTwoTone
                  className="productListDelete"
                  style={{ color: "#bdba2c" }}
                  onClick={() => {
                    setMinimumLevel(params.row.inventor_item_id);
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
      field: "maxQuantity",
      headerName: "Maximum Level",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.maxQuantity + " "}
              </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              {userType === "ROLE_PURCHASING_MANAGER" ? (
                <EditTwoTone
                  className="productListDelete"
                  style={{ color: "#bdba2c" }}
                  onClick={() => {
                    setMaximumLevel(params.row.inventor_item_id);
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
                      setProductStatus(params.row.inventor_item_id, false);
                      // setApproveShow(true);
                    }}
                  />
                ) : (
                  <CancelOutlined
                    className="productListDelete"
                    style={{ color: "red" }}
                    onClick={() => {
                      setProductStatus(params.row.inventor_item_id, true);
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
                      setProductApproveStatus(
                        params.row.inventor_item_id,
                        false,
                      );
                    }}
                  />
                ) : (
                  <ThumbDownAltOutlined
                    className="productListDelete"
                    style={{ color: "red" }}
                    onClick={() => {
                      setProductApproveStatus(
                        params.row.inventor_item_id,
                        true,
                      );
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
                <Link
                  to={
                    "/purchaseStaff/productUpdate/" +
                    params.row.inventor_item_id
                  }
                >
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
                  handleDelete(params.row.inventor_item_id);
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
            getRowId={(row) => row.inventor_item_id}
            pageSize={7}
            checkboxSelection
            autoHeight
            components={{ Toolbar: GridToolbar }}
          />
        </div>

        {/* <SweetAlert
          show={show}
          warning
          showCancel
          confirmBtnText="Yes, Delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={deleteConfirm}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert> */}
        {/* <SweetAlert
          show={approveShow}
          warning
          showCancel
          confirmBtnText="Yes, Update it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={updateApproveConfirm}
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

      </div>
    </div>
  );
}
