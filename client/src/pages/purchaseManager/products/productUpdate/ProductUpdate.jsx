// import React from 'react'

// const ProductUpdate = () => {
//   return (
//     <div>ProductUpdate</div>
//   )
// }

import { Link, useLocation } from "react-router-dom";
import "./ProductUpdate.css";
import Charts from "../../../../components/charts/Charts";
// import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
// import { userRequest } from "../../requestMethods";
import { deleteProduct, getProducts } from "../../../../redux/productApiCalls";
import SweetAlert from "react-bootstrap-sweetalert";

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

  const [titleError,setTitleError] = useState(false);
  const [descriptionError,setDescriptionError] = useState(false);
  const [categoryError,setCategoryError] = useState(false);
  const [messureError,setMessureError] = useState(false);

  const [titleMessageError,setTitleMessageError] = useState("");
  const [descriptionMessageError,setDescriptionMessageError] = useState("");
  const [categoryMessageError,setCategoryMessageError] = useState("");
  const [messureMessageError,setMessureMessageError] = useState("");

  const product = useSelector((state) =>
    state.product.products.find((product) => product.id == productId)
  );
  console.log(product);

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

  const updateProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formNewData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      messure: formData.get("messure"),
      img: formData.get("img"),
      inStock: product.inStock,
      isActivate: product.isActivate,
      price: product.price,
      createDate: product.createDate,
      minimum_level: product.minimumLevel,
      quantity: product.quantity,
    };
    setFormSaveData(formNewData);
    setShow(true);
    console.log(formNewData);
  };

  const URL = `http://localhost:5000/api/v1/products/${productId}`;

  const updateProductDetails = async () => {
    setShow(false);
    if (!formSaveData.title) {
      formSaveData.title = product.title;
    }
    if (!formSaveData.description) {
      formSaveData.description = product.description;
    }
    console.log(formSaveData.img.name);
    if (!formSaveData.img.name) {
      formSaveData.img = product.img;
    }
    console.log(formSaveData.img.name);
    if (!formSaveData.category) {
      formSaveData.category = product.category;
    }
    if (!formSaveData.messure) {
      formSaveData.messure = product.messure;
    }
    // try {
    //   let response = await fetch(URL, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // token: token,
    //     },
    //     body: JSON.stringify({
    //       title: formSaveData.title,
    //       desc: formSaveData.desc,
    //       img: formSaveData.img,
    //       price: formSaveData.price,
    //       inStock: formSaveData.inStock,
    //     }),
    //   });
    //   let json = await response.json();
    //   // setData(json);
    //   console.log(json);
    //   setAllShow(true);
    //   // setLoading(false);
    // } catch (error) {
    //   alert(error);
    // }
  };

  const updateProductDetailsCancel = () => {
    setShow(false);
    console.log("Update cancel");
  };

  return (
    <div className="common">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Detail Edit</h1>
        <div>
          <Link to="/purchaseStaff/productList">
            <button
              className="productAddButton"
              style={{ backgroundColor: "darkblue", marginRight: 10 }}
            >
              Back
            </button>
          </Link>
          <Link to="/purchaseStaff/newProduct">
            <button className="productAddButton">Create</button>
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
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <h2>Update Product</h2>
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
            onSubmit={updateProduct}
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
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      error={messureError}
                      defaultValue={product.messure}
                      variant="standard"
                      margin="normal"
                      // required
                      fullWidth
                      id="messure"
                      label="Messurement"
                      name="messure"
                      autoComplete="messure"
                      autoFocus
                      helperText={messureMessageError}
                      onChange={() => {
                        setMessureError(false);
                        setMessureMessageError("");
                      }}
                    />
                  </Grid>
                </Grid>

                {/* <label>Product Name</label>
                <input type="text" name="title" placeholder={product.title} />
                <label>Product Description</label>
                <input
                  type="text"
                  name="desc"
                  placeholder={product.description}
                />
                <label>Price</label>
                <input type="text" name="price" placeholder={product.price} />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                </div> */}
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
                  <button className="productButton">Update</button>
                </div>
              </Grid>
            </Grid>
            {/* </form> */}
          </Box>
        </Box>
      </div>
      <SweetAlert
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
      </SweetAlert>

      <SweetAlert
        show={allShow}
        success
        title="Successfully updated!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert>
    </div>
  );
}
