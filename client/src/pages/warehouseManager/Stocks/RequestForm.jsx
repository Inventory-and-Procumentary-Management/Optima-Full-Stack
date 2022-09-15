import { useState } from "react";
import "./RequestForm.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { addProduct } from "../../../redux/productApiCalls";
import { useDispatch } from "react-redux";
// import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useLocation } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

import PurchaseOrders from "../dispatch/printPOs/PurchaseOrders";

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

export default function RequestForm() {
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
      <div className="userTitleContainer" style={{margin:"0px 225px"}}>
        <h1 className="addProductTitle" style={{fontSize:30}}>Request Form</h1>
        <div className="userTitleButtons">
          <Link to={"/warehouseManager/Stocks"}>
            <button 
              className=" color-contained-button"
              
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
          {/* <Grid container spacing={4}>
            <Grid item xs={12}>
              <div>
                <h3
                  className="addProductTitle"
                  style={{ margin: " 0px 0px 10px 25px" }}
                >
                  Item Details
                </h3>
              </div>
            </Grid>
            <Grid item xs={7}>
              <TextField label="Dispatch Number" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Number of Items" fullWidth required />
            </Grid>
            <Grid item xs={1} visibility="hidden">
              <TextField label="Item ID" fullWidth required />
            </Grid>

            <Grid item xs={4}>
              <TextField label="Item Name" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Unit Messurement" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Quantity" fullWidth required />
            </Grid>

            <Grid item xs={4}>
              <TextField label="Item Name" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Unit Messurement" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Quantity" fullWidth required />
            </Grid>

            <Grid item xs={4}>
              <TextField label="Item Name" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Unit Messurement" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Quantity" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <div>
                <h3
                  className="addProductTitle"
                  style={{ margin: " 40px 0px 10px 25px" }}
                >
                  Other Details
                </h3>
              </div>
            </Grid>

            <Grid item xs={7}>
              <TextField label="Site Manager Name" fullWidth required />
            </Grid>
            <Grid item xs={5}>
              <TextField label="Emp ID" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item>
              <button
                type="submit"
                // onClick={handleClick}
                // className="addProductButton"
                className="color-contained-button"
                style={{
                  paddingLeft: 70,
                  paddingRight: 70,
                  paddingBottom: 15,
                  paddingTop: 15,
                }}
              >
                Send
              </button>
            </Grid>
          </Grid> */}
          {/* </form> */}
          <PurchaseOrders
          smId={"The Warehouse Manager's ID"}
          smName={"The Warehouse Manager's Name"}
          dispatchNumber={"Request Number"}
          dispatchDate={"Date"}
          itemName={"Item Name"}
          dispatchQuantity={"Quantity"}
          />
        </Box>
      </Box>
      {/* <SweetAlert
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
      ></SweetAlert> */}
    </div>
  );
}
