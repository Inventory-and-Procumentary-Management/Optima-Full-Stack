import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NewSiteStyle.css';
import CancelPopup from "./CancelPopup";
import SiteInternalPage from './SiteInternalPage';
import { Link } from "react-router-dom";



const defautlValues = {
  name :"",
  address: "",
  location:"",
  startdate: "",
  description:"",
  enddate:"",
};

const NewSite = () => {
    const [displayform , setDisplayform] = useState(true);
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
    setDisplayform(false);
  }
  
    return (

        <>
        { displayform ? (<div onSubmit={handleSubmit} className='Main-div' >
          <h2 className='Main-Topic-request-product'>New Project</h2>
          <div  className='sub-div'>
          <form onSubmit={handleSubmit}>
            
          <div className='Full-Form-style'> {/* Form start in here */}
  
  <div className='form-container'> {/* main div for form elements  */ }
  
  
  <div> {/* div 01 */ }
      <h4>Project Name</h4>
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
      <h4>Address</h4>
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
  name='address' 
  variant="outlined"
  value={formValues.address}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 02  end*/ }
  
  <div> {/* div 03 */ }
      <h4>Location</h4>
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
  name='location' 
  variant="outlined" 
  value={formValues.location}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 03 end */ }
  
  <div> {/* div 04 */ }
      <h4>Start Date</h4>

      <input
                    type="date"
                    name="startdate"
                    id="startdate"
                    value={formValues.startdate}
                    onChange = {handleInputChange}
                  />

  </div> {/* div 04 end */ }

  <div> {/* div 05 */ }
      <h4>End Date</h4>

      <input
                    type="date"
                    name="enddate"
                    id="enddate"
                    value={formValues.enddate}
                    onChange = {handleInputChange}
                  />
  
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
  
  <button variant="contained" type='submit' >Create Project</button>
  </div>

  <div className='cancel-button'>
  <button variant="contained" onClick={()=>{return (<CancelPopup></CancelPopup>)}}>Cancel</button>
  </div>
  </div>
  
  </div> {/* Form ends in here */}
        </form>
  
          
  
         
        </div>
  
  
      </div>
) :(<>
 <div>
  
    <SiteInternalPage 
    name = {formValues.name} 
    address = {formValues.address}
    location = {formValues.location}
    startdate = {formValues.startdate}
    enddate =  {formValues.enddate}  
    ></SiteInternalPage>
    </div>
    </>
    ) }
      
      

      </>
      
    )
}

export default NewSite