import { useState } from "react";
import "../../../purchasingStaff/products/newProduct/NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { addProduct } from "../../../../redux/productApiCalls";
import { useDispatch } from "react-redux";
// import SweetAlert from "react-bootstrap-sweetalert";
import { Link, useLocation } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

export default function NewSupplier() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [allShow, setAllShow] = useState(false);
  const [show, setShow] = useState(false);
  const [sizeForm, setSizeForm] = useState(6);
  const [current_date, setCurrent_Date] = useState("");
  const dispatch = useDispatch();

  const [titleError, setTitleError] = useState(false);
  const [regnoError, setRegnoError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [address2Error, setAddress2Error] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [telephone1Error, setTelephone1Error] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [telephone2Error, setTelephone2Error] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
 

  const [titleMessageError, setTitleMessageError] = useState("");
  const [regnoMessageError, setRegnoMessageError] = useState("");
  const [address1MessageError, setAddress1MessageError] = useState("");
  const [address2MessageError, setAddress2MessageError] = useState("");
  const [cityMessageError, setCityMessageError] = useState(false);
  const [provinceMessageError, setProvinceMessageError] = useState(false);
  const [zipMessageError, setZipMessageError] = useState(false);
  const [telephone1MessageError, setTelephone1MessageError] = useState(false);
  const [personMessageError, setPersonMessageError] = useState(false);
  const [telephone2MessageError, setTelephone2MessageError] = useState(false);
  const [usernameMessageError, setUsernameMessageError] = useState(false);
  const [passwordMessageError, setPasswordMessageError] = useState(false);
 

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
            /* inStock: stock, */
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
        <h1 className="addProductTitle">New Supplier</h1>
        <div className="userTitleButtons">
          <Link to={"/admin/users"}>
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
                  label="Business name"
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
                  error={regnoError}
                  // defaultValue={product.regno}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="regno"
                  label="Business registration no"
                  name="regno"
                  autoComplete="regno"
                  autoFocus
                  helperText={regnoMessageError}
                  onChange={(e) => {
                    setRegnoError(false);
                    setRegnoMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={address1Error}
                  // defaultValue={product.address1}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="address1"
                  label="Street adress line 1"
                  name="address1"
                  autoComplete="address1"
                  autoFocus
                  helperText={address1MessageError}
                  onChange={(e) => {
                    setAddress1Error(false);
                    setAddress1MessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={address2Error}
                  // defaultValue={product.address2}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="address2"
                  label="Street adress line 2"
                  name="address2"
                  autoComplete="address2"
                  autoFocus
                  helperText={address2MessageError}
                  onChange={(e) => {
                    setAddress2Error(false);
                    setAddress2MessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={cityError}
                  // defaultValue={product.city}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  autoFocus
                  helperText={cityMessageError}
                  onChange={(e) => {
                    setCityError(false);
                    setCityMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={provinceError}
                  // defaultValue={product.province}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="province"
                  label="Province"
                  name="province"
                  autoComplete="province"
                  autoFocus
                  helperText={provinceMessageError}
                  onChange={(e) => {
                    setProvinceError(false);
                    setProvinceMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={zipError}
                  // defaultValue={product.zip}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="zip"
                  label="Zip code"
                  name="zip"
                  autoComplete="zip"
                  autoFocus
                  helperText={zipMessageError}
                  onChange={(e) => {
                    setZipError(false);
                    setZipMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={telephone1Error}
                  // defaultValue={product.telephone1}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="telephone1"
                  label="Telephone"
                  name="telephone1"
                  autoComplete="telephone1"
                  autoFocus
                  helperText={telephone1MessageError}
                  onChange={(e) => {
                    setTelephone1Error(false);
                    setTelephone1MessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={personError}
                  // defaultValue={product.person}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="person"
                  label="Contact person"
                  name="person"
                  autoComplete="person"
                  autoFocus
                  helperText={personMessageError}
                  onChange={(e) => {
                    setPersonError(false);
                    setPersonMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={telephone2Error}
                  // defaultValue={product.telephone2}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="telephone2"
                  label="Telephone"
                  name="telephone2"
                  autoComplete="telephone2"
                  autoFocus
                  helperText={telephone2MessageError}
                  onChange={(e) => {
                    setTelephone2Error(false);
                    setTelephone2MessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={usernameError}
                  // defaultValue={product.address1}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  helperText={usernameMessageError}
                  onChange={(e) => {
                    setUsernameError(false);
                    setUsernameMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={passwordError}
                  // defaultValue={product.address1}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  helperText={passwordMessageError}
                  onChange={(e) => {
                    setPasswordError(false);
                    setPasswordMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
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
      {/* <SweetAlert
        show={allShow}
        success
        title="Successfully added!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert> */}
      {/* <SweetAlert
        show={show}
        danger
        title="Added Unsuccess!"
        // text="SweetAlert in React"
        onConfirm={() => setShow(false)}
      ></SweetAlert> */}
    </div>
  );
}
