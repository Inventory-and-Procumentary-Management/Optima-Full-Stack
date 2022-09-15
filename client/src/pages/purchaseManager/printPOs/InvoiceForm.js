import { useState } from "react";
import "../products/newProduct/NewProduct.css";

import { useDispatch } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useLocation } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import TableForm from "../../Supplier/invoices/TableForm";

export default function InvoiceForm() {
  const [stock, setStock] = useState(true);
  const [category, setCategory] = useState("");
  const [UOM, setUOM] = useState("");
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

  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

//   useEffect(() => {
//     const date = new Date();
//     let currentDate =
//       date.getFullYear() +
//       "-" +
//       ("0" + (date.getMonth() + 1)).slice(-2) +
//       "-" +
//       ("0" + date.getDate()).slice(-2);
//     console.log(currentDate);
//     setCurrent_Date(currentDate);
//   }, []);

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleClick = (e) => {
//     // if (!e.target.value) {
//     //   setShow(true);
//     //   return;
//     // }
//     e.preventDefault();
//     const fileName = new Date().getTime() + file.name;;
//     // const uploadTask = uploadBytesResumable(storageRef, file);

//     // Register three observers:
//     // 1. 'state_changed' observer, called any time the state changes
//     // 2. Error observer, called on failure
//     // 3. Completion observer, called on successful completion
//   }

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
          noValidate
         
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
                  label="Client Name"
                  name="title"
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
                  label="Client's Address"
                  name="address"
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
                  error={descriptionError}
                  // defaultValue={product.description}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Invoice Number"
                  name="invoiceNumber"
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
                  value={UOM}
                  error={messureError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="messure"
                  label="Invoice Date"
                  type="date"
                  name="messure"
                  helperText={messureMessageError}
                  onChange={(event) => {
                    setMessureError(false);
                    setMessureMessageError("");
                    setUOM(event.target.value);
                    // handleCat();
                  }}
                >
                </TextField>
              </Grid>
                  <article>
                    <TableForm
                     desc={desc}
                     setDesc={setDesc}
                     quantity={quantity}
                     setQuantity={setQuantity}
                     price={price}
                     setPrice={setPrice}
                     amount={amount}
                     setAmount={setAmount}
                     list={list}
                     setList={setList}
                     />
                  </article>
              <Grid
                item
                md={12}
                container
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <button
                  
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

