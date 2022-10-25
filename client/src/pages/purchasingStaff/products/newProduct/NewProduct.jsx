import { useState, useEffect } from "react";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { addProduct } from "../../../../redux/productApiCalls";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, Redirect } from "react-router-dom";


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

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

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

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

export default function NewProduct() {
  const [category, setCategory] = useState("");
  const [UOM, setUOM] = useState("");
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [allShow, setAllShow] = useState(false);
  const [sizeForm, setSizeForm] = useState(6);
  const dispatch = useDispatch();
  const history = useHistory();

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [messureError, setMessureError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [minimumLevelError, setMinimumLevelError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [titleMessageError, setTitleMessageError] = useState("");
  const [descriptionMessageError, setDescriptionMessageError] = useState("");
  const [categoryMessageError, setCategoryMessageError] = useState("");
  const [messureMessageError, setMessureMessageError] = useState("");
  const [quantityMessageError, setQuantityMessageError] = useState("");
  const [minimumLevelMessageError, setMinimumLevelMessageError] = useState(false);
  const [imageMessageError, setImageMessageError] = useState(false);

  const [progress, setProgress] = useState(0);
  const [afterClicked, setAfterClicked] = useState(false);

  const userType = useSelector((state) => state.user.userType);

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

  useEffect(()=>{
    history.push("/purchaseStaff/newProduct");
  },[]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
      title: data.get("title"),
      description: data.get("description"),
      category: data.get("category"),
      uom: data.get("messure"),
      minQuantity: data.get("minQuantity"),
      maxQuantity: data.get("maxQuantity"),
      file: data.get("file"),
    };
    if (!formData.title) {
      setTitleError(true);
      setTitleMessageError("Title can't be empty!");
    } else if (!formData.description) {
      setDescriptionError(true);
      setDescriptionMessageError("Description can't be empty!");
    } else if (!formData.category) {
      setCategoryError(true);
      setCategoryMessageError("Category can't be empty!");
    } else if (!formData.uom) {
      setMessureError(true);
      setMessureMessageError("UOM can't be empty!");
    } else if (!formData.minQuantity) {
      setMinimumLevelError(true);
      setMinimumLevelMessageError("Minimum level can't be empty!");
    } else if (!formData.maxQuantity) {
      setQuantityError(true);
      setQuantityMessageError("Maximum level can't be empty!");
    } else if (!file) {
      setImageError(true);
      setImageMessageError("Image can't be empty!");
    } else if(parseInt(formData.minQuantity) >= parseInt(formData.maxQuantity)){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Maximum level should be greater than minimum level!'
      })
    }else {
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
          setAfterClicked(true);
          const prevProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log("Upload is " + prevProgress + "% done");
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Image added unsuccess!'
          })
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              ...inputs,
              img: downloadURL,
              // categories: [...cat, "all"],
              category: category,
              uom: UOM,
              isApprove: userType === "ROLE_PURCHASING_STAFF" ? false : true,
            };
            const productStatus = addProduct(product, dispatch);
            console.log(productStatus.PromiseResult);
            if (productStatus) {
              setAfterClicked(false);
              setProgress(0);
              setAllShow(true);
              Swal.fire({
                title: "Success!",
                text: "Product added success!",
                icon: "success",
                confirmButtonText: 'Ok',
                confirmButtonColor: '#378cbb',
                // showConfirmButton: false,
                // timer: 2000,
              }).then((result) => {
                setInputs({});
                setCategory("");
                setFile(null);
                setUOM("");
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
          });
        }
      );
    }
  };

  return (
    <div className="newProduct common">
      {/* <h1 className="addProductTitle">New Product</h1> */}
      <div className="userTitleContainer">
        <h1 className="addProductTitle">New Product</h1>
        <div className="userTitleButtons">
          <Link to={"/purchaseStaff/productList"}>
            <button
              className="color-contained-button"
              style={{ marginRight: 10, paddingLeft:17, paddingRight:17 }}
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
          // autoComplete="off"
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
                  // defaultValue={inputs.title}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Product Name"
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
                  // defaultValue={inputs.description}
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
                  value={category}
                  margin="normal"
                  select
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  autoComplete="category"
                  autoFocus
                  helperText={categoryMessageError}
                  onChange={(event) => {
                    setCategoryError(false);
                    setCategoryMessageError("");
                    setCategory(event.target.value);
                    // handleCat();
                  }}
                >
                  {categoryData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  select
                  value={UOM}
                  error={messureError}
                  // defaultValue={product.messure}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="messure"
                  label="Unit of Messurement"
                  name="messure"
                  autoComplete="messure"
                  autoFocus
                  helperText={messureMessageError}
                  onChange={(event) => {
                    setMessureError(false);
                    setMessureMessageError("");
                    setUOM(event.target.value);
                    // handleCat();
                  }}
                >
                  {uomData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  error={minimumLevelError}
                  // defaultValue={inputs.minQuantity}
                  // variant="standard"
                  type="number"
                  margin="normal"
                  required
                  fullWidth
                  id="minQuantity"
                  label="Minimum Level"
                  name="minQuantity"
                  autoComplete="minQuantity"
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
                  error={quantityError}
                  // defaultValue={inputs.maxQuantity}
                  // variant="standard"
                  margin="normal"
                  required
                  type="number"
                  fullWidth
                  id="maxQuantity"
                  label="Maximum Level"
                  name="maxQuantity"
                  autoComplete="maxQuantity"
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
                  error={imageError}
                  // defaultValue={null}
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
              <Grid
                item
                md={sizeForm}
                container
                sx={{ alignItems: "center", justifyContent: "left" }}
              >
                {afterClicked ? (
                  <CircularProgressWithLabel value={progress} />
                ) : (
                  <></>
                )}
              </Grid>
              <Grid
                item
                md={12}
                container
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
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
