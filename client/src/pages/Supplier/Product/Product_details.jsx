import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Supplier_TableTabs from './Supplier_TableTabs';
import Supplier_Table from './Supplier_Table';
import { Link } from "react-router-dom";
import './productStyle.css'

const Product_details = () => {
 
    return (
      <div>
      <div className="link-to-request-product">
          
          <Link to="/supplier/Request_product" className="request-product-link">
                {/* {history.push("/purchaseStaff/materialRequest")} */}               
                Add New +
              </Link>
      </div >
      <div className='table-content'>
      <Supplier_TableTabs> </Supplier_TableTabs>
      </div>
         
          
      
  
      </div>
          
           
           
    )
  
}

export default Product_details