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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}  > Review <ExpandCircleDownIcon></ExpandCircleDownIcon> </button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Issue Date:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           { props.IssueDate}
          </Typography>
          <br></br>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Due Date:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           { props.DueDate}
          </Typography>
          <br></br>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ordered Items:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           { props.details}
          </Typography>
          <br></br>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Description:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           { props.Description}
          </Typography>
          <br></br>

          {/* <button className='accept-btn'>Accept</button> */}
          <Link to="/supplier/Supplier_Invoices" className="link">
                <button className="accept-btn">
                {/* <CheckIcon sx={{ color: green[500] }} > </CheckIcon> */}
                Accept
                </button>
              </Link>
          &nbsp;
          &nbsp;
          &nbsp;

          <button className='reject-btn'>Reject</button>
        </Box>
      </Modal>
    </div>
  );
}