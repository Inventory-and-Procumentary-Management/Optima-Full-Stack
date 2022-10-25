import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "./OrderStyle.css" ;
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from "sweetalert2";


import { useEffect , useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [totalPrice, settotalPrice] = useState([]);
  var subtotal = 0;

  console.log(props.AllDetails)

  const handlePrint =()=>{
    window.print()
  }

  const RejectOrder = async ()=>{
    handleClose();
    console.log("In reject order Function");
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire(text)
    }

  }

  const dummyFunction = ()=>{
    console.log("In dummy Function");
  }
  const findUnitPrice = (inventoryID)=>{
    props.AllDetails.map((product)=>{ 
      if(product.inventoryItemID == inventoryID ){
        console.log(product.price);
          return product.price;
      }
    })
  }

  return (
    <div>
      
        <div>
        <button onClick={handleOpen}  > Review <ExpandCircleDownIcon></ExpandCircleDownIcon> </button> 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
  
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
              Order Details
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Issue Date:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1> { props.IssueDate} </h1>
            </Typography>
            <br></br>
  
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Due Date:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1> { props.DueDate} </h1>
            </Typography>
            <br></br>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Description
            </Typography>
  
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="left">Quantity&nbsp;</TableCell>
              <TableCell align="left">Description&nbsp;</TableCell>
              <TableCell align="left">Unit Price&nbsp;</TableCell>
              <TableCell align="left">Unit Each Total&nbsp;</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {props.Description.map((row) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.productName}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{props.AllDetails.map((product)=>{ 
      if(product.inventoryItemID == row.inventoryItemId ){
        console.log(product.price);
          return product.price;
      }
    })}</TableCell>
    <TableCell align="left">{props.AllDetails.map((product)=>{ 
      if(product.inventoryItemID == row.inventoryItemId ){
        //console.log(product.price);
        // settotalPrice([...totalPrice,product.price * row.quantity]);
        subtotal = subtotal + product.price * row.quantity;
          return product.price * row.quantity;
          
      }
    })}</TableCell>

                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            
            </Typography>
            <br></br>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sub Total : {subtotal}
            </Typography>
            <br></br>

            {/* <button className='accept-btn'>Accept</button> */}
            {/* <Link to="/supplier/Supplier_Invoices" className="link">
                  <button className="accept-btn">
                  Accept
                  </button>
                </Link> */}
                <button className="accept-btn">
                  Accept
                  </button>
            &nbsp;
            &nbsp;
            &nbsp;
  
            <button className='reject-btn' onClick={()=>{RejectOrder();}}>Reject</button>
          </Box>
        </Modal>
        </div>
    </div>
  );
}