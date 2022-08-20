import { useState } from "react";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { addProduct } from "../../../../redux/productApiCalls";
import { useDispatch } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useLocation } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

const stockData = [
  {
    value: true,
    label: "True",
  },
  {
    value: false,
    label: "False",
  },
];

export default function NewProduct() {
  const [stock, setStock] = useState(true);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [allShow, setAllShow] = useState(false);
  const [show, setShow] = useState(false);
  const [sizeForm, setSizeForm] = useState(6);
  const [current_date, setCurrent_Date] = useState("");
  const dispatch = useDispatch();

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [messureError, setMessureError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [inStockError, setInStockError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [minimumLevelError, setMinimumLevelError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [titleMessageError, setTitleMessageError] = useState("");
  const [descriptionMessageError, setDescriptionMessageError] = useState("");
  const [categoryMessageError, setCategoryMessageError] = useState("");
  const [messureMessageError, setMessureMessageError] = useState("");
  const [priceMessageError, setPriceMessageError] = useState(false);
  const [inStockMessageError, setInStockMessageError] = useState(false);
  const [quantityMessageError, setQuantityMessageError] = useState(false);
  const [minimumLevelMessageError, setMinimumLevelMessageError] =
    useState(false);
  const [imageMessageError, setImageMessageError] = useState(false);

  useEffect(() => {
    const date = new Date();
    let currentDate =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    console.log(currentDate);
    setCurrent_Date(currentDate);
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    if (!e.target.value) {
      setShow(true);
      return;
    }
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            // categories: [...cat, "all"],
            inStock: stock,
            isActivate: true,
            createDate: current_date,
          };
          addProduct(product, dispatch);
          setAllShow(true);
        });
      }
    );
  };

  return (
    <div className="newProduct common">
      {/* <h1 className="addProductTitle">New Product</h1> */}
      <div className="userTitleContainer">
        <h1 className="addProductTitle">New Product</h1>
        <div className="userTitleButtons">
          <Link to={"/purchaseStaff/productList"}>
            <button
              className="productAddButton"
              style={{ backgroundColor: "darkblue" }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>

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
          onSubmit={handleClick}
          className="productForm"
          sx={{ m: 5 }}
        >
          {/* <div className="productFormLeft"> */}
          <Grid container spacing={4}>
            {/* <Grid item md={10}> */}
            <Grid container spacing={4}>
              <Grid item md={sizeForm}>
                <TextField
                  error={titleError}
                  // defaultValue={product.title}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Product Name"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  helperText={titleMessageError}
                  onChange={(e) => {
                    setTitleError(false);
                    setTitleMessageError("");
                    // handleChange();
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={descriptionError}
                  // defaultValue={product.description}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Product Description"
                  name="description"
                  autoComplete="description"
                  autoFocus
                  helperText={descriptionMessageError}
                  onChange={(e) => {
                    setDescriptionError(false);
                    setDescriptionMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={categoryError}
                  // defaultValue={product.category}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  autoComplete="category"
                  autoFocus
                  helperText={categoryMessageError}
                  onChange={(e) => {
                    setCategoryError(false);
                    setCategoryMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={messureError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="messure"
                  label="Messurement"
                  name="messure"
                  autoComplete="messure"
                  autoFocus
                  helperText={messureMessageError}
                  onChange={(e) => {
                    setMessureError(false);
                    setMessureMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={priceError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  autoFocus
                  helperText={priceMessageError}
                  onChange={(e) => {
                    setPriceError(false);
                    setPriceMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={quantityError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity"
                  autoFocus
                  helperText={quantityMessageError}
                  onChange={(e) => {
                    setQuantityError(false);
                    setQuantityMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={minimumLevelError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="minimumLevel"
                  label="Minimum Level"
                  name="minimumLevel"
                  autoComplete="minimumLevel"
                  autoFocus
                  helperText={minimumLevelMessageError}
                  onChange={(e) => {
                    setMinimumLevelError(false);
                    setMinimumLevelMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={inStockError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  value={stock}
                  margin="normal"
                  required
                  select
                  fullWidth
                  id="in_stock"
                  label="Stock"
                  name="in_stock"
                  autoComplete="in_stock"
                  autoFocus
                  helperText={inStockMessageError}
                  onChange={(event) => {
                    setInStockError(false);
                    setInStockMessageError("");
                    setStock(event.target.value);
                    // handleCat();
                  }}
                >
                  {stockData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={sizeForm}>
                {/* <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                /> */}
                <TextField
                  error={imageError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  type="file"
                  margin="normal"
                  required
                  fullWidth
                  id="file"
                  label="Image"
                  name="file"
                  autoComplete="file"
                  autoFocus
                  helperText={imageMessageError}
                  onChange={(e) => {
                    setImageError(false);
                    setImageMessageError("");
                    setFile(e.target.files[0]);
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}></Grid>
              <Grid item md={12} container sx={{alignItems:"center", justifyContent:"center"}}>
                <button
                  type="submit"
                  // onClick={handleClick}
                  // className="addProductButton"
                  className="color-contained-button"
                  style={{paddingLeft:70, paddingRight: 70, paddingBottom: 15, paddingTop:15}}
                >
                  Create
                </button>
              </Grid>
            </Grid>
            {/* </Grid> */}
            {/* <Grid item md={2}> */}
            {/* <div className="productFormRight">
                  <div className="productUpload">
                    <img
                      // src={product.img}
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
                </div> */}
            {/* </Grid> */}
          </Grid>
          {/* </form> */}
        </Box>
      </Box>
      <SweetAlert
        show={allShow}
        success
        title="Successfully added!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert>
      <SweetAlert
        show={show}
        danger
        title="Added Unsuccess!"
        // text="SweetAlert in React"
        onConfirm={() => setShow(false)}
      ></SweetAlert>
    </div>
  );
}
