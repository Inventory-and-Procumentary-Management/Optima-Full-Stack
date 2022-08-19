import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import InventoryTable from "./Table";
import BasicModal from "./BasicModal";

import BuildingTable from "./BuildingTable";
import PlumbingTable from "./PlumbingTable";

export default function TopBarTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "black" }}>
            <Grid container spacing={5}>
              <Grid item xs={10}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{ color: "#fff" }}
                  >
                    <Tab label="Building" sx={{ color: "#fff" }} value="1" />
                    <Tab label="Wiring" sx={{ color: "#fff" }} value="2" />
                    <Tab label="Plumbing" sx={{ color: "#fff" }} value="3" />
                    <Tab label="Painting" sx={{ color: "#fff" }} value="4" />
                    <Tab label="Tile" sx={{ color: "#fff" }} value="5" />
                    <Tab label="Wood" sx={{ color: "#fff" }} value="5" />
                  </TabList>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 1 }}>
                {/* <Link to="/AddProduct" className="link"> */}
                <BasicModal />
                  
                {/* </Link> */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <TabPanel value="1" sx={{p: 0}}><BuildingTable /></TabPanel>
        <TabPanel value="2" sx={{p: 0}}><PlumbingTable /></TabPanel>
        <TabPanel value="3" sx={{p: 0}}><InventoryTable /></TabPanel>
        <TabPanel value="4" sx={{p: 0}}><BuildingTable /></TabPanel>
        <TabPanel value="5" sx={{p: 0}}><PlumbingTable /></TabPanel>
        <TabPanel value="6" sx={{p: 0}}><InventoryTable /></TabPanel>
      </TabContext>
    </Box>
  );
}
