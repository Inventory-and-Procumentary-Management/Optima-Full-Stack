import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../../../redux/productApiCalls";
import SweetAlert from "react-bootstrap-sweetalert";
import SearchComponent from "../../../../components/search/Search";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [allShow, setAllShow] = useState(false);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, deleteTrigger]);

  const deleteConfirm = async () => {
    setShow(false);
    deleteProduct(productId, dispatch);
    setDeleteTrigger(!deleteTrigger);
  };
  const deleteCancel = () => {
    setShow(false);
  };

  const handleDelete = (id) => {
    setProductId(id);
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 220 },
    {
      field: "title",
      headerName: "Product",
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
              <button
                className="productListEdit"
                style={{ backgroundColor: "#bdba2c" }}
              >
                Set
              </button>
              {/* </Link> */}
            </div>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">{params.row.price} </div>

              {/* <Link to={"/purchaseStaff/productUpdate/" + params.row.id}> */}
              <button className="productListEdit">Change</button>
              {/* </Link> */}
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
              <button className="productListEdit">Change</button>
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
              <button
                className="productListEdit"
                style={{ backgroundColor: "#bdba2c" }}
              >
                Set
              </button>
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

              {params.row.isActivate ? (
                <button
                  className="productListEdit"
                  style={{ backgroundColor: "red" }}
                >
                  Deactivate
                </button>
              ) : (
                <button
                  className="productListEdit"
                  style={{ backgroundColor: "red" }}
                >
                  Activate
                </button>
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
            <Link to={"/purchaseStaff/productUpdate/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            {/* <Link to={"/purchaseStaff/newProduct"}>
              <button
                className="productListEdit"
                style={{ backgroundColor: "darkblue" }}
              >
                Create
              </button>
            </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.row.id);
                setShow(true);
              }}
            />
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
              <button className="color-contained-button">Add Product</button>
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
        <SweetAlert
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
        </SweetAlert>
        <SweetAlert
          show={allShow}
          success
          title="Successfully delete!"
          // text="SweetAlert in React"
          onConfirm={() => setAllShow(false)}
        ></SweetAlert>
      </div>
    </div>
  );
}
