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
import { addUser, addRole } from "../../../../redux/userApiCalls";
import { useDispatch } from "react-redux";

import { Link, useLocation } from "react-router-dom";
// import "../user/user.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

const typeData = [
  {
    value: 'ROLE_PURCHASING_MANAGER',
    label: "Purchasing Manager",
  },
  {
    value: 'ROLE_PURCHASING_STAFF',
    label: "Purchasing Staff",
  },
  {
    value: 'ROLE_SITE_MANAGER',
    label: "Site Manager",
  },
  {
    value: 'ROLE_WAREHOUSE_MANAGER',
    label: "Warehouse Manager",
  },
  {
    value: 'ROLE_PROJECT_MANAGER',
    label: "Project Manager",
  },
  
];

export default function NewUser() {
  const [type, settype] = useState(true);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [allShow, setAllShow] = useState(false);
  const [show, setShow] = useState(false);
  const [sizeForm, setSizeForm] = useState(6);
  const [current_date, setCurrent_Date] = useState("");
  const [employeeNo, setEmployeeNo] = useState("EMP"+(Math.floor((Math.random() * 100000) + 1001)));
  const dispatch = useDispatch();

  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [usertypeError, setUsertypeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  

  const [fullnameMessageError, setFullnameMessageError] = useState("");
  const [emailMessageError, setEmailMessageError] = useState("");
  const [idMessageError, setIdMessageError] = useState("");
  const [usernameMessageError, setUsernameMessageError] = useState("");
  const [usertypeMessageError, setUsertypeMessageError] = useState("");
  const [mobileNumberMessageError, setMobileNumberMessageError] = useState("");

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

    let x = "EMP"+(Math.floor((Math.random() * 100000) + 1001));
    // setEmployeeNo(x);
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs);
    let {roleName,...others} = inputs;
    const user = {
      ...others,
      isActivate: true,
      employeeId:employeeNo,
      password:"12345678"
    };
    const role = {
      "username":others.username,
      "roleName":type
    };
    await addUser(user, dispatch);
    addRole(role, dispatch);
    setAllShow(true);
  }
  const handleClick1 = (e) => {
    // if (!e.target.value) {
    //   setShow(true);
    //   return;
    // }
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
            intype: type,
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
        <h1 className="addProductTitle">New User</h1>
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
                  error={idError}
                  defaultValue={employeeNo}
                  // variant="standard"
                  disabled
                  margin="normal"
                  required
                  fullWidth
                  id="employeeId"
                  label="Employee ID"
                  name="employeeId"
                  autoComplete="employeeId"
                  autoFocus
                  helperText={idMessageError}
                  onClick={(e) => {
                    setIdError(false);
                    setIdMessageError("");
                    // setInputs((prev) => {
                    //   return { ...prev, [e.target.name]: e.target.value };
                    // });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={fullnameError}
                  // defaultValue={product.fullname}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  helperText={fullnameMessageError}
                  onChange={(e) => {
                    setFullnameError(false);
                    setFullnameMessageError("");
                    // handleChange();
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={emailError}
                  // defaultValue={product.email}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={emailMessageError}
                  onChange={(e) => {
                    setEmailError(false);
                    setEmailMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={usertypeError}
                  // defaultValue={product.id}
                  // variant="standard"
                  value={type}
                  margin="normal"
                  required
                  select
                  fullWidth
                  id="roleName"
                  label="User Type"
                  name="roleName"
                  autoComplete="roleName"
                  autoFocus
                  helperText={usertypeMessageError}
                  onChange={(event) => {
                    setUsertypeError(false);
                    setUsertypeMessageError("");
                    settype(event.target.value);
                    // handleCat();
                  }}
                >
                  {typeData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                    
                  ))}
                </TextField>
              </Grid>
              
              <Grid item md={sizeForm}>
                <TextField
                  error={usernameError}
                  // defaultValue={product.id}
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
                  error={usernameError}
                  // defaultValue={product.id}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile Number"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  autoFocus
                  helperText={mobileNumberMessageError}
                  onChange={(e) => {
                    setMobileNumberError(false);
                    setMobileNumberMessageError("");
                    setInputs((prev) => {
                      return { ...prev, [e.target.name]: e.target.value };
                    });
                  }}
                />
              </Grid>


              {/* <Grid item md={sizeForm}>
                <TextField
                  error={passwordError}
                  type="password"
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
              </Grid> */}
              
              
              {/* <Grid item md={sizeForm}> */}
                {/* <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                /> */}
                {/* <TextField
                  error={imageError}
                  // defaultValue={product.id}
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
              </Grid> */}
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
