import { useState } from "react";
import "../products/newProduct/NewProduct.css";

import { useDispatch } from "react-redux";
// import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useLocation, useNavigate, useHistory } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import TableForm from "../../Supplier/invoices/TableForm";

export default function InvoiceForm() {
  const history = useHistory();
  const [stock, setStock] = useState(true);
  const [category, setCategory] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
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
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");
  const [uom, setUom] = useState("");
  const [list, setList] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");

  // function uniqueID() {
  //   return Math.floor(Math.random() + Date.now())
  //   }

  //generate unique invoice number
  //   useEffect(()=>{
  //     const uniqueID = ()=>{
  //         setInvoiceNum(Math.random())
  //     }
  //     uniqueID()
  // },[invoiceNum, setInvoiceNum])

  // function handleClick(){
  //   history.push("/purchaseManager/invoicePreview", {
  //     list, clientAddress, clientName, invoiceNum, invoiceDate
  //   })
  //   // navigation.navigate("/purchaseManager/newMaterialRequest1")
  //   // console.log(list, clientAddress, clientName, invoiceNum, invoiceDate);
  // }

  return (
    <div className="newProduct common">
      {/* <h1 className="addProductTitle">New Product</h1> */}
      <div className="userTitleContainer">
        <h1 className="addProductTitle">New Purchase Order</h1>
        <div className="userTitleButtons">
          <Link to={"/purchaseManager/purchaseOrder"}>
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

        <Box noValidate className="productForm" sx={{ m: 5 }}>
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
                    setClientName(e.target.value);
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
                    setClientAddress(e.target.value);
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
                    setInvoiceNum(e.target.value);
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
                  label="Invoice Date"
                  type="date"
                  name="messure"
                  helperText={messureMessageError}
                  onChange={(event) => {
                    setMessureError(false);
                    setMessureMessageError("");
                    setInvoiceDate(event.target.value);
                    // handleCat();
                  }}
                ></TextField>
              </Grid>
              <article>
                <TableForm
                  desc={desc}
                  setDesc={setDesc}
                  itemCode={itemCode}
                  setItemCode={setItemCode}
                  itemName={itemName}
                  setItemName={setItemName}
                  uom={uom}
                  setUom={setUom}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                />
              </article>
            </Grid>
          </Grid>
          {/* </form> */}
        </Box>
      </Box>
    </div>
  );
}
