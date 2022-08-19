import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './SupplierInvoicesStyle.css'


const Supplier_Invoices = () => {
    const { useState } = React;
    const [myArray, setMyArray] = useState([]);

    const handleSubmit = (event) => {
       
        event.preventDefault();
        
        console.log(myArray);
    
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setMyArray(myArray => [...myArray, event.target.value]);
    };
      

  return (
    <div> {/* Main div to return */ }
    <h2 className='Main-topic-invoices'>Invoices</h2>

    <div className='Invoices-heading'> {/*Heading Div start */}
    <h3 className='topic-invoice-number'>Invoice - INV-456-001</h3>
    <h4 className='heading-date'>Date - 2022-08-17</h4>
    </div> {/*Heading Div End */}

    <div className='form-first-part'>{/* Form 1 part Start in Here */}

    <div> {/* Div 1 start */}
    <h4>Invoice Number</h4>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      
    </Box>
    </div> {/* Div 1 end */}

    <div> {/* Div 2 start */}
    <h4>Email</h4>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      
    </Box>
    </div> {/* Div 2 end */}

    <div> {/* Div 3 start */}
    <h4>Name</h4>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      
    </Box>
    </div> {/* Div 3 end */}

    <div> {/* Div 4 start */}
    <h4>Mobile</h4>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      
    </Box>
    </div> {/* Div 4 end */}

    <div> {/* Div 5 start */}
    <h4>Address</h4>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rows = {3}
          
        />
        </div>
        </Box>
    </div> {/* Div 5 end */}

    <div>   {/* Div 6 start */}
    <h4>Due Date</h4>
    </div>  {/* Div 6 end */}
    </div> {/* Form 1 part Ends in Here */}
    <form onSubmit={handleSubmit}>
    <div className='add-item-select-btn'> {/* Adds item Button div start */}
      <h4 className='topic-add-item'>Add Item +</h4>
      <br></br>
      

      
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Add</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="items"
          onChange={handleChange}
        
        >
          <MenuItem value={10}>Cement</MenuItem>
          <MenuItem value={20}>Sand</MenuItem>
          <MenuItem value={30}>Bricks</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button variant="contained" type='submit'>Add to List</Button>
    </div> {/* Adds item Button div end */}
    </form>
    <div> {/* Table Div start  */}
        
    </div> {/* Table Div ends  */}


      <div className='calculation-div'> {/*All cal part end */}
      <div className='special-note-style'>{/*Special note Div start */}
      <h4>Special Note</h4>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Special Note"
          multiline
          rows = {3}
          
        />
        </div>
        </Box>
      </div> {/* Special note Div ends */}

      <div> {/*Calculation Area div start */}
        <div className='calculation-div'> {/*div 1 Start*/}
            <h5>Sub Total</h5>
            <h5>123456</h5>
        </div> {/*div 1 End*/}

        <div className='calculation-div'> {/*div 2 Start*/}
            <h5>Tax</h5>
            <div>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '10ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Tax" variant="outlined" size='small' />
      
    </Box> 
            </div>
        </div> {/*div 2 End*/}

        <div className='calculation-div'> {/*div 3 Start*/}
            <h5>Discount</h5>
            <div>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '10ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Discount" variant="outlined" size='small' />
      
    </Box> 
            </div>
        </div> {/*div 3 End*/}
      <br></br>
        <div className='calculation-div'> {/*div 4 Start*/}
            <h5>Total</h5>
            <h5>12465</h5>
        </div> {/*div 4 End*/}

      </div> {/*Calculation Area div end */}

      </div> {/*All cal part end */}
      <br></br>
      <div className='create-btn'> {/* Request btn div start */}
      <Button variant="contained" type='submit'>Create</Button>
      </div> {/* Request btn div End */}
   
    </div> 
  )
}

export default Supplier_Invoices