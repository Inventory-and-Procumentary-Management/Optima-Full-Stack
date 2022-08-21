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

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'IssueDate', headerName: 'Issue Date', width: 130 },
    { field: 'Due_date', headerName: 'Due date', width: 130 },
    { field: 'Items', headerName: 'Items', width: 130 },
    { field: 'More', headerName: 'Item Details', width: 130 ,
     renderCell: (params) => {

      return (
        <>
        <OrderMoreDetailsPopup details={params.row.Items}></OrderMoreDetailsPopup>
        {/* {params.row.Items} */}
        </>
      );
        },},
    {
      field: 'Description',
      headerName: 'Description',
      width: 160,
    },
   
    

    { field: 'Button', headerName: '', width: 160 ,
    renderCell: (params) => {

      return (
        <>
        <button className='accept-btn'>Accept</button>
        &nbsp;
        &nbsp;
        <button className='reject-btn'>Reject</button>
        </>
      );
        },},
  
  ];
  
  const rows = [
    { id: 1, Organization: 'Snow', IssueDate: '2022-05-01', Items:'Cement/Sand', Due_date: '2022-05-06', Description: 'sdvfsodjvglsdj'},
    { id: 2, Organization: 'Lannister',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-15', Description: 'sdvfsodjvglsdj' },
    { id: 3, Organization: 'Lannister',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-16', Description: 'sdvfsodjvglsdj' },
    { id: 4, Organization: 'Stark',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-17', Description: 'sdvfsodjvglsdj' },
    { id: 5, Organization: 'Targaryen',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-18', Description: 'sdvfsodjvglsdj' },
    { id: 6, Organization: 'Melisandre',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-19', Description: 'sdvfsodjvglsdj' },
    { id: 7, Organization: 'Clifford',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-20', Description: 'sdvfsodjvglsdj' },
    { id: 8, Organization: 'Frances',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-23', Description: 'sdvfsodjvglsdj' },
    { id: 9, Organization: 'Roxie',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-29', Description: 'sdvfsodjvglsdj' },
  ];
const Order_table = () => {
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

export default Order_table