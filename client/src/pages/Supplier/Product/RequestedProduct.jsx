import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import RequestedProductTableTabs from './RequestedProductTableTabs';
import { Link } from "react-router-dom";
import './productStyle.css'

const RequestedProduct = () => {
  return (
        <div className='Main-div'>
        <div className="link-to-request-product">
            
            <Link to="/supplier/Request_product" className="request-product-link">
                  {/* {history.push("/purchaseStaff/materialRequest")} */}               
                  Add New +
                </Link>
        </div >
        <div className='table-content'>
        <RequestedProductTableTabs> </RequestedProductTableTabs>
        </div>
           
            
        
    
        </div>
            
             
             
  )
}

export default RequestedProduct