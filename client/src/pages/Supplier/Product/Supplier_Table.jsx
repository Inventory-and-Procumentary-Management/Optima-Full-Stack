import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from "@material-ui/data-grid";
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useState} from 'react';
import UpdateProductForm from './UpdateProductForm';
import Supplier_TableTabs from './Supplier_TableTabs';
import {Route} from "react-router-dom";





// function createData(name, Price_per_one, Quantity, Description, more) {
//   return { name, Price_per_one, Quantity, Description, more };
// }

// const rows = [
//   createData('Cement', 159, 6.0, "This is a description of Ultra Cement." ),
//   createData('Bricks', 237, 9.0, "This is Poranu bricks. very strong. " ),
//   createData('Sand', 262, 16.0, "This is mathugama sand and very good for kapararuwa." ),
//   createData('Cement', 305, 3.7, "This is a description of Ultra Cement.." ),
//   createData('Sand', 356, 16.0, "This is a description of Ultra Cement."),
// ];



export default function BasicTable() {


  const [displayRequestForm, setdisplayRequestForm] = useState(false);
  const [itemName, setitemName] = useState("");

  const columns = [
    { field: 'id', headerName: '', width: 70 },
   { field: 'Item', headerName: 'Item', width: 130 },
   { field: 'Unit', headerName: 'Unit', width: 130 },
   { field: 'Price_per_one', headerName: 'Price_Per_One', width: 130 },
   {
     field: 'Quantity',
     headerName: 'Quantity',
     width: 160,
   },
   {
     field: 'Description',
     headerName: 'Description',
     width: 350,
   },
   { field: 'Button', headerName: '', width: 200 ,
   renderCell: (params) => {
    
   return (
       <>
       <div>
     
       <button onClick = {()=>{
       
       setitemName(params.row.itemName);
       setdisplayRequestForm(true);
     }
       }>Update <AddIcon sx={{ color: green[500] }} ></AddIcon></button>
       
       </div>
       &nbsp;
       &nbsp;
       &nbsp;
       <div>
       <h3>Delete <DeleteIcon sx={{ color: red[500] }}>Delete</DeleteIcon></h3>
       
       </div>
       </>
     );
       },}
 ];
 
 const rows = [
   { id: 1, Item: 'Cement',Unit:'Bag', Price_per_one: '3200',Quantity:12 , Description: 'Ultra Cement and the and ajantha Cement' },
   { id: 2, Item: 'Sand',Unit:'Cube', Price_per_one: '13000',Quantity:12, Description: 'Ultra Cement and the and ajantha Cement' },
   { id: 3, Item: 'Bricks',Unit:'', Price_per_one: '100',Quantity:12, Description: '' },
   { id: 4, Item: '1" Pipe',Unit:'', Price_per_one: '1000',Quantity:12, Description: 'Slone Pipe' },
   { id: 5, Item: '1 1/2" Pipe',Unit:'', Price_per_one: '1000',Quantity:12, Description: 'Slone Pipe' },
   { id: 6, Item: '1 3/4" Pipe',Unit:'', Price_per_one: '1100',Quantity:12, Description: 'Slone Pipe' },
   { id: 7, Item: '2" Pipe',Unit:'', Price_per_one: '1200',Quantity:12, Description: 'Slone Pipe' },
   { id: 8, Item: '1 ft Tile',Unit:'', Price_per_one: '1500',Quantity:12, Description: 'Lanka tile and american tile contain' },
   { id: 9, Item: '1 1/2 Tile',Unit:'', Price_per_one: '1500',Quantity:12, Description: 'Lanka tile and american tile contain' },
 ];
 

  
  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Item</TableCell>
  //           <TableCell align="left">Price Per One</TableCell>
  //           <TableCell align="left">Quantity</TableCell>
  //           <TableCell align="left">Description</TableCell>
  //           <TableCell align="left"></TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow
  //             key={row.name}
  //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //           >
  //             <TableCell component="th" scope="row">
  //               {row.name}
  //             </TableCell>
  //             <TableCell align="left">{row.Price_per_one}</TableCell>
  //             <TableCell align="left">{row.Quantity}</TableCell>
  //             <TableCell align="left">{row.Description}</TableCell>
  //             <TableCell align="left"><AddIcon></AddIcon> &nbsp; <DeleteIcon></DeleteIcon>  </TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
  return (

    <>
    
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={true}
        disableMultipleSelection={true}
      />
      </div>    
    </>
    
  );
}