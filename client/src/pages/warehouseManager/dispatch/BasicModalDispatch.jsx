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

import { Link } from "react-router-dom";

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

export default function BasicModalDispatch({
  name,
  topic,
  supName,
  reqId,
  date,
  description,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formOpen = () => {};

  // const [reqId, setReqId] = useState("");
  // const [itemName, setItemName] = useState("");

  // console.log(description[0]);

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
          <Grid container spacing={3} padding="20px 10px">
            <Grid item xs={5}>
              <h3>Request ID :</h3>
            </Grid>
            <Grid item xs={7}>
              <Input
                label="Request ID"
                fullWidth
                required
                value={reqId}
                readOnly
                //onChange={(e)=> setReqId(e.target.value)}
              />
            </Grid>

            <Grid item xs={5}>
              <h3>Site Manager :</h3>
            </Grid>
            <Grid item xs={7}>
              <Input
                fullWidth
                required
                value={supName}
                readOnly
                //onChange={(e)=> setReqId(e.target.value)}
              />
            </Grid>

            <Grid item xs={5}>
              <h3>Recieve Date :</h3>
            </Grid>
            <Grid item xs={7}>
              <Input
                fullWidth
                required
                value={date}
                readOnly
                //onChange={(e)=> setReqId(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <h3>Description :</h3>
            </Grid>
            <Grid item xs={12}>
              <textarea
                fullWidth
                required
                readOnly
                value={description}
                // onChange={(e)=> setItemName(e.target.value)}
              />
            </Grid>

            <Grid item style={{ alignItems: "right" }}>
              <Link to="/warehouseManager/Dispatch" className="link">
                <button className="color-contained-button">Dispatch</button>
              </Link>
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
