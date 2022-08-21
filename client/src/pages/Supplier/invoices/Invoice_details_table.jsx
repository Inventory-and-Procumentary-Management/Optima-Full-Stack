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
import KitchenIcon from '@mui/icons-material/Kitchen';

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
        { field: 'Generate Invoice', headerName: '', width: 200 ,
        renderCell: (params) => {

          return (
            <>
            { <button><KitchenIcon></KitchenIcon></button>}
            {/* {params.row.Items} */}
            </>
          );
            },
      },
 
  ];
  
  const rows = [
    { id: 1, invoiceNumber: 'INV 001', IssueDate: '2022-05-01', TotalPrice:10000 , Paid_or_not: true,Items:"Cement, Sand"},
    { id: 2, invoiceNumber: 'INV 002',IssueDate: '2022-05-02',TotalPrice: 200000, Paid_or_not: true, Items:"Cement, Sand"},
    { id: 3, invoiceNumber: 'INV 003',IssueDate: '2022-05-02',TotalPrice:50000, Paid_or_not: false, Items:"Cement, Sand"},
    { id: 4, invoiceNumber: 'INV 004',IssueDate: '2022-05-03',TotalPrice: 10000, Paid_or_not: true,Items:"Cement, Sand" },
    { id: 5, invoiceNumber: 'INV 005',IssueDate: '2022-05-03',TotalPrice: 100000, Paid_or_not: true,Items:"Cement, Sand"},
    { id: 6, invoiceNumber: 'INV 006',IssueDate: '2022-05-03',TotalPrice:150000, Paid_or_not: false,Items:"Cement, Sand"},
    { id: 7, invoiceNumber: 'INV 007',IssueDate: '2022-05-05',TotalPrice:250000, Paid_or_not: true, Items:"Cement, Sand"},
    { id: 8, invoiceNumber: 'INV 008',IssueDate: '2022-05-05',TotalPrice:300000, Paid_or_not: false, Items:"Cement, Sand"},
    { id: 9, invoiceNumber: 'INV 009',IssueDate: '2022-05-06',TotalPrice:500000, Paid_or_not: true, Items:"Cement, Sand"},
  ];

const Invoice_details_table = () => {
  
    return (
  <div>
      <h2 className='invoice-details-topic-style-02'>Invoice Details</h2>
      <div className='invoice-detail-table-style-02'>

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          
        </div>
        </div>
        </div>
      );
  
}

export default Invoice_details_table