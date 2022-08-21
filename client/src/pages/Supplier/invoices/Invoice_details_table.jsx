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
import { More } from '@mui/icons-material';
import Invoice_details_popup from './Invoice_details_popup'

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'invoiceNumber', headerName: 'Invoice Number', width: 190 },
    { field: 'IssueDate', headerName: 'Issue Date', width: 170 },
    { field: 'TotalPrice', headerName: 'Total Price ', width: 170 },
    { field: 'Paid_or_not', headerName: 'Paid ', width: 140 },
    { field: 'ItemDetails', headerName: 'Item Details', width: 170 ,
     renderCell: (params) => {

      return (
        <>
        { <Invoice_details_popup details={params.row.Items}></Invoice_details_popup>}
        {/* {params.row.Items} */}
        </>
      );
        },},
 
  ];
  
  const rows = [
    { id: 1, invoiceNumber: 'INV 001', IssueDate: '2022-05-01', TotalPrice:1000 , Paid_or_not: true,Items:"Cement, Sand"},
    { id: 2, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice: 2000, Paid_or_not: true, Items:"Cement, Sand"},
    { id: 3, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice:5000, Paid_or_not: false, Items:"Cement, Sand"},
    { id: 4, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice: 10000, Paid_or_not: true,Items:"Cement, Sand" },
    { id: 5, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice: 100000, Paid_or_not: true,Items:"Cement, Sand"},
    { id: 6, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice:150000, Paid_or_not: false,Items:"Cement, Sand"},
    { id: 7, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice:250000, Paid_or_not: true, Items:"Cement, Sand"},
    { id: 8, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice:300000, Paid_or_not: false, Items:"Cement, Sand"},
    { id: 9, invoiceNumber: 'INV 001',IssueDate: '2022-05-01',TotalPrice:500000, Paid_or_not: true, Items:"Cement, Sand"},
  ];

const Invoice_details_table = () => {
  
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          
        </div>
      );
  
}

export default Invoice_details_table