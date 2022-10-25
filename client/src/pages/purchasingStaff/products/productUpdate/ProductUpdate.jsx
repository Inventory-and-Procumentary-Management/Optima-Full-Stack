import { Link, useLocation } from "react-router-dom";
import "./ProductUpdate.css";
import Charts from "../../../../components/charts/Charts";
import { Publish } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../../redux/productApiCalls";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";


import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function ProductUpdate() {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  console.log(productId);
  const [pStats, setPStats] = useState([]);
  const [show, setShow] = useState(false);
  const [allShow, setAllShow] = useState(false);
  const [formSaveData, setFormSaveData] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [messureError, setMessureError] = useState(false);

  const [titleMessageError, setTitleMessageError] = useState("");
  const [descriptionMessageError, setDescriptionMessageError] = useState("");
  const [categoryMessageError, setCategoryMessageError] = useState("");
  const [messureMessageError, setMessureMessageError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(()=>{
  //   history.push("/purchaseStaff/productUpdate/:productId");
  // },[]);

  const product = useSelector((state) =>
    state.product.products.find(
      (product) => product.inventor_item_id == productId
    )
  );
  console.log(product);

  const categoryData = [
    {
      value: "BUILDING",
      label: "Building",
    },
    {
      value: "WIRING",
      label: "Wiring",
    },
    {
      value: "PLUMBING",
      label: "Plumbing",
    },
    {
      value: "PAINTING",
      label: "Painting",
    },
    {
      value: "TILE",
      label: "Tile",
    },
    {
      value: "WOOD",
      label: "Wood",
    },
  ];

  const uomData = [
    {
      value: "Cubes",
      label: "Cubes",
    },
    {
      value: "Packets",
      label: "Packets",
    },
    {
      value: "Leters",
      label: "Leters",
    },
    {
      value: "Kg",
      label: "Kg",
    },
    {
      value: "Nos",
      label: "Nos",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    // const getStats = async () => {
    //   try {
    //     const res = await userRequest.get("orders/income?pid=" + productId);
    //     const list = res.data.sort((a,b)=>{
    //         return a._id - b._id
    //     })
    //     list.map((item) =>
    //       setPStats((prev) => [
    //         ...prev,
    //         { name: MONTHS[item._id - 1], Sales: item.total },
    //       ])
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getStats();
    let data = [
      { name: MONTHS[0], Sales: 15 },
      { name: MONTHS[1], Sales: 20 },
      { name: MONTHS[2], Sales: 65 },
      { name: MONTHS[3], Sales: 45 },
      { name: MONTHS[4], Sales: 20 },
      { name: MONTHS[5], Sales: 74 },
    ];
    setPStats(data);
  }, [productId, MONTHS]);

  const updateProductSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formNewData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      uom: formData.get("messure"),
      // img: product.img,
    };
    setFormSaveData(formNewData);
    setShow(true);
    console.log(formNewData);
    updateProductDetails(formNewData);
  };

  const updateProductDetails = async (data) => {
    setShow(false);
    updateProduct(productId, JSON.stringify(data), dispatch);
  };

  return (
    <div className="common">
      <div className="productTitleContainer">
        <h1 className="addTitle">Product Detail Edit</h1>
        <div>
          <Link to="/purchaseStaff/productList">
            <button
              className="color-contained-button"
              style={{ marginRight: 10, paddingLeft:17, paddingRight:17 }}
            >
              Back
            </button>
          </Link>
          <Link to="/purchaseStaff/newProduct">
            <button className="color-contained-button">Create</button>
          </Link>
        </div>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts data={pStats} dataKey1="Sales" title="Product Requirement" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Product ID:</span>
              <span className="productInfoValue">
                {product.inventor_item_id}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Total Quantity:</span>
              <span className="productInfoValue">{product.totalQuantity}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Maximum Quantity:</span>
              <span className="productInfoValue">{product.maxQuantity}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Minimum Quantity:</span>
              <span className="productInfoValue">{product.minQuantity}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <h2 className="h3Title">Update Product</h2>
        <Box
          sx={{
            my: 1,
            mx: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* <form className="productForm" onSubmit={updateProduct}> */}

          <Box
            component="form"
            noValidate
            onSubmit={updateProductSubmit}
            className="productForm"
            // sx={{ m: 5 }}
          >
            {/* <div className="productFormLeft"> */}
            <Grid container spacing={4}>
              <Grid item md={10}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <TextField
                      error={titleError}
                      defaultValue={product.title}
                      variant="standard"
                      margin="normal"
                      // required
                      fullWidth
                      id="title"
                      label="Product Name"
                      name="title"
                      autoComplete="title"
                      autoFocus
                      helperText={titleMessageError}
                      onChange={() => {
                        setTitleError(false);
                        setTitleMessageError("");
                      }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      error={descriptionError}
                      defaultValue={product.description}
                      variant="standard"
                      margin="normal"
                      // required
                      fullWidth
                      id="description"
                      label="Product Description"
                      name="description"
                      autoComplete="description"
                      autoFocus
                      helperText={descriptionMessageError}
                      onChange={() => {
                        setDescriptionError(false);
                        setDescriptionMessageError("");
                      }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      error={categoryError}
                      defaultValue={product.category}
                      variant="standard"
                      margin="normal"
                      select
                      // required
                      fullWidth
                      id="category"
                      label="Category"
                      name="category"
                      autoComplete="category"
                      autoFocus
                      helperText={categoryMessageError}
                      onChange={() => {
                        setCategoryError(false);
                        setCategoryMessageError("");
                      }}
                    >
                      {categoryData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      error={messureError}
                      defaultValue={product.uom}
                      variant="standard"
                      margin="normal"
                      select
                      // required
                      fullWidth
                      id="messure"
                      label="UOM"
                      name="messure"
                      autoComplete="messure"
                      autoFocus
                      helperText={messureMessageError}
                      onChange={() => {
                        setMessureError(false);
                        setMessureMessageError("");
                      }}
                    >
                      {uomData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={2}>
                <div className="productFormRight">
                  <div className="productUpload">
                    <img
                      src={product.img}
                      alt=""
                      className="productUploadImg"
                    />
                    <label for="file">
                      <Publish />
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="img"
                      style={{ display: "none" }}
                    />
                  </div>
                  <button className="color-outlined-button" style={{marginTop:10}}>Update</button>
                </div>
              </Grid>
            </Grid>
            {/* </form> */}
          </Box>
        </Box>
      </div>

      {/* <SweetAlert
        show={show}
        warning
        showCancel
        confirmBtnText="Yes, Update it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={updateProductDetails}
        onCancel={updateProductDetailsCancel}
        focusCancelBtn
      >
        You will not be able to recover this imaginary file!
      </SweetAlert> */}

      {/* <SweetAlert
        show={allShow}
        success
        title="Successfully updated!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert> */}

    </div>
  );
}
