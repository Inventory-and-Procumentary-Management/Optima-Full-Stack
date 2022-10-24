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

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'IssueDate', headerName: 'Issue Date', width: 160 },
    { field: 'Due_date', headerName: 'Due date', width: 160 },
    { field: 'Items', headerName: 'Items', width: 160 },
    {
      field: 'Description',
      headerName: 'Description',
      width: 300,
    },
    { field: 'More', headerName: 'Review ', width: 170 ,
    renderCell: (params) => {

     return (
       <>
       <OrderMoreDetailsPopup 
       details={params.row.Items} 
       IssueDate = {params.row.IssueDate}
       DueDate = {params.row.Due_date}
       Description = {params.row.Description}
       ></OrderMoreDetailsPopup>
       {/* {params.row.Items} */}
       </>
     );
       },},
   
    

    // { field: 'Action', headerName: '', width: 160 ,
    // renderCell: (params) => {

    //   return (
    //     <>
    //         <Link to="/supplier/Supplier_Invoices" className="link">
    //             <li className="sidebarListItem">
    //             <CheckIcon sx={{ color: green[500] }} > </CheckIcon>
    //             </li>
    //           </Link>
    //     {/* <button onClick={ () =>{
    //       return( <Link to="/supplier/Supplier_Invoices" className="link"></Link>)
                        
    //     }
    //     }> <CheckIcon></CheckIcon> </button> */}
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     &nbsp;
    //     <BlockIcon sx={{ color: red[500] }}></BlockIcon>
    //     </>
    //   );
    //     },},
  
  ];
  
  const rows = [
    { id: 1, Organization: 'Snow', IssueDate: '2022-05-01', Items:[" Cement "," Sand "], Due_date: '2022-05-06', Description: 'We want Ultra Cement'},
    { id: 2, Organization: 'Lannister',IssueDate: '2022-05-01',Items:["Cement ", " Bricks "], Due_date: '2022-09-15', Description: 'We want Sanstha Cement' },
    { id: 3, Organization: 'Lannister',IssueDate: '2022-05-01',Items:[" Sand "], Due_date: '2022-09-16', Description: '-' },
    { id: 4, Organization: 'Stark',IssueDate: '2022-05-01',Items:[" 1 ft Tile "," 1 ft Tile "], Due_date: '2022-09-17', Description: 'We want Lanka Tiles' },
    { id: 5, Organization: 'Targaryen',IssueDate: '2022-05-01',Items:[" 1' Pipes ", " 2' Pipes "], Due_date: '2022-09-18', Description: 'We want S-lone Pipes' },
    { id: 6, Organization: 'Melisandre',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-19', Description: '-' },
    { id: 7, Organization: 'Clifford',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-20', Description: '-' },
    { id: 8, Organization: 'Frances',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-23', Description: '-' },
    { id: 9, Organization: 'Roxie',IssueDate: '2022-05-01',Items:'Cement', Due_date: '2022-09-29', Description: '-' },
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
            disableSelectionOnClick
            
          />
          
        </div>
      );
}

export default Order_table