import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./RequestProductStyle.css";
import Axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { isInteger } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../redux/productApiCalls";
import {
  deleteSupplierProduct,
  getSupplierProducts,
  updateSupplierProduct,
  addSupplierProduct,
} from "../../redux/SupplierProductApiCalls";
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";



const defautlValues = {
  itemName :"Suwasana",
  category: "",
  price: 0,
  availableQuantity: 0,
  description:"",
  uom:"",
  inventor_item_id:0,
};


const selectValues = [{}];

const Request_product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const userType = useSelector((state) => state.user.userType);
    const [formValues , setFormValues] = useState(defautlValues);
    const [priceError ,setPriceError] = useState(false);
    const [quantityError ,setquantityError] = useState(false);
    const [deleteTrigger, setDeleteTrigger] = useState("");
    const [selectValue, setSelectValue] = useState("No Product");
    const [selectObjectProduct , setSelectObjectProduct ] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [displayCategory , setdisplayCategory] = useState(false);
    const history = useHistory();

  let selectItemProduct = products;

  selectItemProduct = selectItemProduct.map((item) => {
    return {
      category: item.category,
      createDate: item.createDate,
      description: item.description,
      img: item.img,
      inventor_item_id: item.inventor_item_id,
      isActivate: item.isActivate,
      isApprove: item.isApprove,
      maxQuantity: item.maxQuantity,
      minQuantity: item.minQuantity,
      label: item.title,
      totalQuantity: item.totalQuantity,
      uom: item.uom,
    };
  });
  //console.log(selectItemProduct);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const selectNameInputchange = (obb) => {
    console.log("In the selectNameinputchange function");
    console.log(obb);
   const json_obb= {
     "name":"itemName",
      "value" : obb.label,

    }

      setFormValues(formValues=>({
        ...formValues,
        itemName:obb.label,
      }));

      // setName(existingValues => ({
      //   // Retain the existing values
      //   ...existingValues,
      //   // update the firstName
      //   firstName: e.target.value,
      // }))
    }

    const selectInventoryItemID =(obb)=>{
      console.log("In the selectInventory Item ID function");
      console.log(obb);
     const json_obb= {
       "name":"inventorItemID",
        "value" : obb.inventor_item_id,
  
      }
  
        setFormValues(formValues=>({
          ...formValues,
          inventoryItemID:obb.inventor_item_id,
        }));
  
        // setName(existingValues => ({
        //   // Retain the existing values
        //   ...existingValues,
        //   // update the firstName
        //   firstName: e.target.value,
        // }))
      }

      const selectUOMInputchange =(obb)=>{
        console.log("In the selectUOMinputchange function");
        console.log(obb);
       const json_obb = {
          "name":"uom",
          "value" : obb.uom,
    
        }
       
        setFormValues(formValues=>({
          ...formValues,
          uom:obb.uom,
        }));
        }

  const selectCategoryInputchange = (obb) => {
    console.log("In the selectCategoryinputchange function");
    console.log(obb);
    const json_obb = {
      name: "category",
      value: obb.category,
    };
    setFormValues((formValues) => ({
      ...formValues,
      category: obb.category,
    }));
  };
  // const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });

  useEffect(() => {
    const getproductsItems = async () => {
      await getProducts(dispatch);

      console.log(products)
      //console.log(userType);
    };
    getproductsItems();
  }, [dispatch, deleteTrigger]);
  
  
  const handleSubmit = async (event) =>{
    console.log("In handle Submit");
    event.preventDefault();
    console.log(formValues);
    if(isInteger(formValues.price) && isInteger(formValues.availableQuantity) ){
      console.log(formValues);
      if(await addSupplierProduct(formValues,dispatch)){
        console.log("Success");
        Swal.fire(
          'Requested Success!',
          'You add a Request Product!',
          'success'
        ).then(()=> {
          history.push("/supplier/Requested_Product_details")
        })
      }else{
        console.log("Failed");
      };
    }
  };
  const handleName = (e) => {
    console.log(e.target.value);
    // if(e.target.value == "The Godfather"){
    //   alert("The Godfather!!");
    // }
  }
  
    return (
      
      <div onSubmit={handleSubmit} className='Main-div' >
          <h2 className='Main-Topic-request-product'>Request product</h2>
          <div  className='sub-div'>
          
          <form onSubmit={handleSubmit}>
            
          <div className='Full-Form-style'> {/* Form start in here */}
  
  <div className='form-container'> {/* main div for form elements  */ }
  
  
  <div> {/* div 01 */ }
      <h4>Name</h4>
      <Autocomplete
        value={selectValue}
        onChange={(event, newValue) => {
          setSelectValue(newValue.label);
          setSelectObjectProduct(newValue);
          selectNameInputchange(newValue);
         selectUOMInputchange(newValue);
         selectCategoryInputchange(newValue);
         selectInventoryItemID(newValue);

                    //handleInputChange;
                    //console.log(newValue)
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={selectItemProduct}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <button
                  className="btn-ok"
                  onClick={() => {
                    setdisplayCategory(true);
                    console.log(selectObjectProduct.category);
                  }}
                >
                  Get Details
                </button>
                {displayCategory ? (
                  <div className="cateroty-and-uom">
                    <div>
                      {" "}
                      {/* div 02 */}
                      {/* <h4>Category</h4> */}
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        {/* <TextField 
  id="outlined-basic" 
  disabled
  name='category' 
  variant="outlined"
  defaultValue={selectObjectProduct.category}
  // value={formValues.category}
  onChange = {handleInputChange}
  /> */}

                        <div className="category-style">{`Category: ${
                          selectObjectProduct.category !== null
                            ? `'${selectObjectProduct.category}'`
                            : "null"
                        }`}</div>
                        {/* <div>{`inputValue: '${inputValue}'`}</div> */}
                      </Box>
                    </div>{" "}
                    {/* div 02  end*/}
                    <div>
                      {" "}
                      {/* div 05 */}
                      {/* <h4>Unit Of Measurement</h4> */}
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        {/* <TextField
  id="outlined-basic"
  disabled
   name='UOM' 
   variant="outlined" 
   value={formValues.UOM}
  onChange = {handleInputChange}
  /> */}
  <div className='category-style'>{`Unit Of Measurement: ${selectObjectProduct.uom !== null ? `'${selectObjectProduct.uom}'` : 'null'}`}</div>
  
  </Box>
  </div> {/* div 05 end */ }

  </div>
 ):(<></>)}


  </div>  {/* div 01 end */ }
  
  <div className='footer-section'>
    <p className='dont-have-a-product-name'>Dont Have a Product Name to add: <button className='click-me-btn'>
    <Link to="/supplier/Request_new_product">Click Here</Link>
      </button> </p>
    
  </div>
  

  <div>
  <div> {/* div 03 */ }
      <h4>Price Per One</h4>
      
     
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  error ={priceError ? true : false }
  id="outlined-basic" 
  name='price' 
  variant="outlined" 
  helperText={priceError ? "Please Enter a Valid Number" : "" }
  // value={formValues.price_per_one}
  onChange = {(e)=>{
    handleInputChange(e);
    if(!isInteger(e.target.value) || e.target.value <=0){
      setPriceError(true) 
    }else{setPriceError(false)}

    
    }}
  />
  
  </Box>
  </div> {/* div 03 end */ }

  <div> {/* div 04 */ }
      <h4>Quantity</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  error ={quantityError ? true : false }
  id="outlined-basic"
   name='availableQuantity' 
   variant="outlined" 
   helperText={quantityError ? "Please Enter a Valid Number" : "" }
  //  value={formValues.quantity}
  onChange = {(e)=>{
    handleInputChange(e);
    if(!isInteger(e.target.value) || e.target.value <=0){
      setquantityError(true) 
    }else{setquantityError(false)}

    
    }}
  />
  
  </Box>
  </div> {/* div 04 end */ }

  </div>
  
  
  
  
  
  </div> {/* main div for form elements end  */ }
  
  
  <div className='description-textfield'> {/* div 0-1 */ }
      <h4>Description</h4>
      <Box
  component="form"
  sx={{
  '& .MuiTextField-root': { m: 1, width: '90ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <div>
  <TextField
    id="outlined-multiline-flexible"
    name='description'
    multiline
    rows = {4}
    value={formValues.description}
  onChange = {handleInputChange}
    
  />
  </div>
  </Box>
  
  </div>  {/* div 0-1 end */ }
  <div className='button-container'>
  <div className='request-button'>
  <button variant="contained" type='submit'>Request</button>
  </div>

              <div className="cancel-button">
                <button variant="contained">Cancel</button>
              </div>
            </div>
          </div>{" "}
          {/* Form ends in here */}
        </form>
      </div>
    </div>
  );
};

export default Request_product;
