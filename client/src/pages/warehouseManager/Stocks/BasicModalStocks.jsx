import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, TextField } from "@mui/material";
import BasicSelect from "../inventory/BasicSelect";
import "../../pages.css";
import { useState } from "react";
import { Input } from "@material-ui/core";

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


export default function BasicModalStocks({name,topic }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [reqId, setReqId] = useState("");
  const [itemName, setItemName] = useState("");

  return (
    <div>
      {/* <Button color="inherit" align="center">
                    <AddIcon />
                    ADD NEW
                  </Button> */}
      <Button onClick={handleOpen} style={{ color: "black" }}>
        {name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 align="center" style={{ marginBottom: "20px" }}>
            {topic}
          </h2>
          <Grid container spacing={3} padding="20px">
            <Grid item xs={12}>
              <Input label="Request ID" fullWidth required 
              value={reqId}
              onChange={(e)=> setReqId(e.target.value)}
              readOnly
              />
            </Grid>
            <Grid item xs={12}>
              <Input label="Item Name" fullWidth required 
              value={itemName}
              readOnly
              onChange={(e)=> setItemName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
              <BasicSelect label="Category">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </BasicSelect>
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
            </Grid>
            <Grid item style={{ alignItems: "right" }}>
            <button className="color-contained-button"  >REQUEST</button>
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
