import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Order_table from './Order_table';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Order_tableTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ width: '20%' }} label="Core Products" {...a11yProps(0)} />
            <Tab sx={{ width: '20%' }} label="Pipe and Eqipments" {...a11yProps(1)} />
            <Tab sx={{ width: '20%' }} label="Paints" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Order_table></Order_table>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Order_table></Order_table> 
        
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Order_table></Order_table>
        </TabPanel>
      </Box>
    );
}

export default Order_tableTabs