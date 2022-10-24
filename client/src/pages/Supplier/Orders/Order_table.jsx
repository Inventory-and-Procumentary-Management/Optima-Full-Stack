import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { DataGrid ,GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import { DataGrid } from "@material-ui/data-grid";
import OrderMoreDetailsPopup from './OrderMoreDetailsPopup'
import { More } from '@mui/icons-material';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupplierOrders,
  getSupplierOrders,
  updateSupplierOrders,
} from "../../../redux/SupplierOrdersApiCalls";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'issueDate', headerName: 'Issue Date', width: 200, 
    renderCell: (params) => {
      return (
        <>
         {params.row.issueDate.slice(0, 10).replace("T", " ")}
        {/* {params.row.Items} */}
        </>
      );
        } },
    { field: 'dueDate', headerName: 'Due date', width: 200, 
    renderCell: (params) => {
      return (
        <>
         {params.row.dueDate.slice(0, 10).replace("T", " ")}
        {/* {params.row.Items} */}
        </>
      );
        }  },
        
  
    { field: 'More', headerName: 'Review ', width: 300 ,
    renderCell: (params) => {

     return (
       <div >
       <OrderMoreDetailsPopup 
       details={params.row.Items} 
       IssueDate = {params.row.issueDate.slice(0, 10).replace("T", " ")}
       DueDate = {params.row.dueDate.slice(0, 10).replace("T", " ")}
       Description = {params.row.orderProducts}
       ></OrderMoreDetailsPopup>
       {/* {params.row.Items} */}
       </div>
     );
       },},
   
  
  ];
  
const Order_table = () => {

  const dispatch = useDispatch();
  const SupplierOrders = useSelector((state) => state.supplierorder.supplierorders.filter((x)=>x.receiverId == 45));
  const userType = useSelector((state) => state.user.userType);
  const userID = useSelector((state) => state.user.userID);
  const [deleteTrigger, setDeleteTrigger] = useState("");
 
  console.log(userID);

  useEffect(() => {
    const getSupplierOrdersItems = async () => {
      await getSupplierOrders(dispatch);
    
      console.log(SupplierOrders);
      // console.log(typeof(Supplierproducts))

      //console.log(userType);
    };
    getSupplierOrdersItems();
  }, [dispatch, deleteTrigger]);

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={SupplierOrders}
            columns={columns}
            pageSize={5}
            getRowId={(row)=>row.purchase_order_id}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            
          />
          
        </div>
      );
}

export default Order_table