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
            <Toolbar style={{ backgroundColor: "#fff" }}>
              <Grid container spacing={5}>
                <Grid item xs={10}>
                  <Box sx={{ borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      sx={{ color: "#000" }}
                    >
                      <Tab label="Building" sx={{ color: "#000" }} value="1" />
                      <Tab label="Wiring" sx={{ color: "#000" }} value="2" />
                      <Tab label="Plumbing" sx={{ color: "#000" }} value="3" />
                      <Tab label="Painting" sx={{ color: "#000" }} value="4" />
                      <Tab label="Tile" sx={{ color: "#000" }} value="5" />
                      <Tab label="Wood" sx={{ color: "#000" }} value="6" />
                    </TabList>
                  </Box>
                </Grid>
                <Grid item xs={2} sx={{ marginTop: 1 }}>
                  {/* <Link to="/AddProduct" className="link"> */}
                  {/* <BasicModal /> */}

                  {/* </Link> */}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <TabPanel value="1" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
          <TabPanel value="3" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
          <TabPanel value="4" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
          <TabPanel value="5" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
          <TabPanel value="6" sx={{ p: 0 }}>
            <BuildingTable />
          </TabPanel>
        </TabContext>
      </Box>
 
  );
}
