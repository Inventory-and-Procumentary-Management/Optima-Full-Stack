import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, TextField } from "@mui/material";
import BasicSelect from "./BasicSelect";

import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

import {
  deleteCategory,
  getCategorys,
  updateCategory,
  addCategory,
} from "../../../redux/categoryApiCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ name, title, topic }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [allShow, setAllShow] = useState(false);
  const [file, setFile] = useState(null);
  const [UOM, setUOM] = useState("");

  const [categoryError, setCategoryError] = useState(false);

  const [categoryMessageError, setCategoryMessageError] = useState("");
  const [afterClicked, setAfterClicked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [afterClicked]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    //e.preventDefault();
    console.log(category);
    // const data = new FormData(e.currentTarget);
    // let formData = {
    //   category: data.get("category"),
    // };
    if (category === "") {
      setCategoryError(true);
      setCategoryMessageError("Category can't be empty!");
    }else {
      // const fileName = new Date().getTime() + file.name;
      // const storage = getStorage(app);
      // const storageRef = ref(storage, fileName);
      // const uploadTask = uploadBytesResumable(storageRef, file);
      const categoryStatus = addCategory(category, dispatch);
            console.log(categoryStatus);
            if (categoryStatus) {
              setAfterClicked(false);
              setProgress(0);
              setAllShow(true);
              Swal.fire({
                title: "Success!",
                text: "category added success!",
                icon: "success",
                confirmButtonText: 'Ok',
                confirmButtonColor: '#378cbb',
                // showConfirmButton: false,
                // timer: 2000,
              }).then((result) => {
                setInputs({});
                // setCategory("");
                // setFile(null);
                // setUOM("");
                // if (result.isConfirmed) {
                //   Swal.fire('Saved!', '', 'success')
                // }
                // window.location.href = "http://localhost:3000/purchaseStaff/productList";
              })
              // return (
              //   <Stack sx={{ width: "100%" }} spacing={2}>
              //     <Alert severity="success">
              //       Product added success!
              //     </Alert>
              //   </Stack>
              // );
            } else {
              return (
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Product added unsuccess!'
                })
                // <Stack sx={{ width: "100%" }} spacing={2}>
                //   <Alert severity="warning">Product added unsuccess!</Alert>
                // </Stack>
              );
            }

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      // uploadTask.on(
      //   //"state_changed",
      //   // (snapshot) => {
      //   //   // Observe state change events such as progress, pause, and resume
      //   //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      //   //   setAfterClicked(true);
      //   //   const prevProgress =
      //   //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      //   //   console.log("Upload is " + prevProgress + "% done");
      //   //   switch (snapshot.state) {
      //   //     case "paused":
      //   //       console.log("Upload is paused");
      //   //       break;
      //   //     case "running":
      //   //       console.log("Upload is running");
      //   //       break;
      //   //     default:
      //   //   }
      //   // },
      //   // (error) => {
      //   //   // Handle unsuccessful uploads
      //   //   Swal.fire({
      //   //     icon: 'error',
      //   //     title: 'Oops...',
      //   //     text: 'Image added unsuccess!'
      //   //   })
      //   // },
      //   () => {
      //     // Handle successful uploads on complete
      //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //       const product = {
      //         ...inputs,
      //         img: downloadURL,
      //         // categories: [...cat, "all"],
      //         category: category,
      //         uom: UOM,
      //         isApprove: userType === "ROLE_PURCHASING_STAFF" ? false : true,
      //       };
      //       const productStatus = addProduct(product, dispatch);
      //       console.log(productStatus.PromiseResult);
      //       if (productStatus) {
      //         setAfterClicked(false);
      //         setProgress(0);
      //         setAllShow(true);
      //         Swal.fire({
      //           title: "Success!",
      //           text: "Product added success!",
      //           icon: "success",
      //           confirmButtonText: 'Ok',
      //           confirmButtonColor: '#378cbb',
      //           // showConfirmButton: false,
      //           // timer: 2000,
      //         }).then((result) => {
      //           setInputs({});
      //           setCategory("");
      //           setFile(null);
      //           setUOM("");
      //           // if (result.isConfirmed) {
      //           //   Swal.fire('Saved!', '', 'success')
      //           // }
      //           // window.location.href = "http://localhost:3000/purchaseStaff/productList";
      //         })
      //         // return (
      //         //   <Stack sx={{ width: "100%" }} spacing={2}>
      //         //     <Alert severity="success">
      //         //       Product added success!
      //         //     </Alert>
      //         //   </Stack>
      //         // );
      //       } else {
      //         return (
      //           Swal.fire({
      //             icon: 'error',
      //             title: 'Oops...',
      //             text: 'Product added unsuccess!'
      //           })
      //           // <Stack sx={{ width: "100%" }} spacing={2}>
      //           //   <Alert severity="warning">Product added unsuccess!</Alert>
      //           // </Stack>
      //         );
      //       }
      //     });
      //   }
      // );
    }
  };

  return (
    <div>
      {/* <Button color="inherit" align="center">
                    <AddIcon />
                    ADD NEW
                  </Button> */}
      <Button
        onClick={handleOpen}
        style={{
          color: "black",
          background: "#378cbb",
          padding: "5px 7px",
          borderRadius: "5px",
        }}
        className="color-contained-button"
      >
        {name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          noValidate
          // autoComplete="off"
          sx={style}
        >
          <h2 align="center" style={{ marginBottom: "20px" }}>
            {title}
          </h2>
          <Grid container spacing={3} padding="20px">
            <Grid item xs={12}>
              <TextField
                value={category}
                error={categoryError}
                label={topic}
                name="category"
                fullWidth
                required
                helperText={categoryMessageError}
                onChange={(event) => {
                  setCategoryError(false);
                  setCategoryMessageError("");
                  setCategory(event.target.value);
                }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField label="Item Name" fullWidth required />
            </Grid>
            
            <Grid item xs={12}>
              <BasicSelect label="Quantity Type">
                <MenuItem value="hello">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </BasicSelect>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Request Amount" fullWidth required />
            </Grid> */}
            <Grid item style={{ alignContent: "center" }} xs={12}>
              <button
                onClick={handleClick}
                style={{
                  color: "black",
                  background: "#378cbb",
                  padding: "5px 7px",
                  borderRadius: "5px",
                }}
                className="color-contained-button"
              >
                ADD
              </button>
            </Grid>
          </Grid>

          {/* < */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
