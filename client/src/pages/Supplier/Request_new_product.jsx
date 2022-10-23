import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './RequestProductStyle.css';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../redux/productApiCalls";

const defautlValues = {
    name :"",
    category: "",
    price_per_one:"",
    quantity: "",
    description:"",
    UOM:"",
  };

const Request_existing_product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const userType = useSelector((state) => state.user.userType);
    const [formValues , setFormValues] = useState(defautlValues);
    const [deleteTrigger, setDeleteTrigger] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
  
  }

  useEffect(() => {
    const getproductsItems = async () => {
      await getProducts(dispatch);
      console.log(products)
    };
    getproductsItems();
  }, [dispatch, deleteTrigger]);
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formValues);
  

  }
  
    return (
      
      <div onSubmit={handleSubmit} className='Main-div' >
          <h2 className='Main-Topic-request-product'>Request New product</h2>
          <div  className='sub-div'>
         
          <form onSubmit={handleSubmit}>
            
          <div className='Full-Form-style'> {/* Form start in here */}
  
  <div className='form-container'> {/* main div for form elements  */ }
  
  
  <div> {/* div 01 */ }
      <h4>Name</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField 
  id="outlined-basic" 
  name='name' 
  variant="outlined" 
  value={formValues.name}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div>  {/* div 01 end */ }
  
  <div> {/* div 02 */ }
      <h4>Category</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField 
  id="outlined-basic" 
  name='category' 
  variant="outlined"
  value={formValues.category}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 02  end*/ }
  
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
  id="outlined-basic" 
  name='price_per_one' 
  variant="outlined" 
  value={formValues.price_per_one}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 03 end */ }
  {products.category}
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
  id="outlined-basic"
   name='quantity' 
   variant="outlined" 
   value={formValues.quantity}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 04 end */ }

  <div> {/* div 05 */ }
      <h4>Unit Of Measurement</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  id="outlined-basic"
   name='UOM' 
   variant="outlined" 
   value={formValues.UOM}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 05 end */ }
  
  
  
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
  <button variant="contained" type='submit' >Request</button>
  </div>

  <div className='cancel-button'>
  <button variant="contained" >Cancel</button>
  </div>
  </div>
  
  </div> {/* Form ends in here */}
        </form>
  
          
  
         
        </div>
  
  
      </div>
      
    )
}

export default Request_existing_product