import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './RequestProductStyle.css';



const defautlValues = {
  name :"",
  category: "",
  price_per_one:"",
  quantity: "",
  description:"",
};


const Request_product = () => {
    const [formValues , setFormValues] = useState(defautlValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
  
  }
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formValues);
  }
  
    return (
      
      <div onSubmit={handleSubmit}>
          <h2 className='Main-Topic-request-product'>Request product</h2>
          <h3 className='Topic-Add-new-item'>Add new Item</h3>
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
  label="Name" 
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
  label="Category" 
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
  label="Price Per One" 
  name='price_per_one' 
  variant="outlined" 
  value={formValues.price_per_one}
  onChange = {handleInputChange}
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
  id="outlined-basic"
  label="Quantity"
   name='quantity' 
   variant="outlined" 
   value={formValues.quantity}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 04 end */ }
  
  
  
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
    label="Description"
    name='description'
    multiline
    rows = {4}
    value={formValues.description}
  onChange = {handleInputChange}
    
  />
  </div>
  </Box>
  
  </div>  {/* div 0-1 end */ }
  
  <div className='terms-checkbox'>  {/* div 0-2 */ }
  <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="Agree to Terms and Condition" />
  </FormGroup>
  </div>  {/* div 0-2 end */ }
  <div className='request-button'>
  <Button variant="contained" type='submit' >Request</Button>
  </div>
  
  </div> {/* Form ends in here */}
        </form>
  
          
  
         
  
  
  
      </div>
      
    )
}

export default Request_product