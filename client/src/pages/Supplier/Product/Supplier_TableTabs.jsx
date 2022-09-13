import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Supplier_Table from './Supplier_Table';
import './productStyle.css';
// import UpdateProductForm from './UpdateProductForm';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs( {displayvalue, itemName} ) {
  const [value, setValue] = React.useState(0);
console.log( {displayvalue} , {itemName});
  const [displayTabs, setDisplayTabs ] = React.useState(true);
   // setDisplayTabs({displayvalue});

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <>
  <div>

<Box sx={{ width: '100%' }}>
<div className='tabStyle'>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
   <Tab sx={{ width: '20%' }} label="Core Products " {...a11yProps(0)} />
   
   <Tab sx={{ width: '20%' }} label="Pipe and Eqipments" {...a11yProps(1)} />
   <Tab sx={{ width: '20%' }} label="Paints" {...a11yProps(2)} />
 </Tabs>
</Box>
</div>


<TabPanel value={value} index={0}>
<Supplier_Table></Supplier_Table>
</TabPanel>
<TabPanel value={value} index={1}>
<Supplier_Table></Supplier_Table>
</TabPanel>
<TabPanel value={value} index={2}>
<Supplier_Table></Supplier_Table>
</TabPanel>
</Box>

</div>
    
    </>
   
  );
}
