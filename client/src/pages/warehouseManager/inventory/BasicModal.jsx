import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, TextField } from "@mui/material";
import BasicSelect from "./BasicSelect";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button color="inherit" align="center">
                    <AddIcon />
                    ADD NEW
                  </Button> */}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 align="center" style={{ marginBottom: "20px" }}>
            Add New Item
          </h2>
          <Grid container spacing={3} padding="20px">
            <Grid item xs={12}>
              <TextField label="name" fullWidth required />
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
              <TextField label="Quantity" fullWidth required />
            </Grid>
            <Grid item style={{ alignItems: "right" }}>
              <Button style={{ backgroundColor: "#FFB000" }}>ADD</Button>
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
