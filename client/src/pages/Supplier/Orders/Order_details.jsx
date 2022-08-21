import React from 'react'
import Order_table from './Order_table'
import Order_tableTabs from './Order_tableTabs'
import './OrderStyle.css'

const Order_details = () => {
  return (
    <div className='Main-div-order'>
      <div>
        <h2>Orders</h2>
      </div >
      <div className='sub-div-order'>
      <Order_tableTabs></Order_tableTabs>
      </div>
    
   </div>
  )
}

export default Order_details