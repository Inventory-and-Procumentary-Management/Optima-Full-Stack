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

function createData(name, Price_per_one, Quantity, Description, more) {
  return { name, Price_per_one, Quantity, Description, more };
}

const rows = [
  createData('Cement', 159, 6.0, "This is a description of Ultra Cement." ),
  createData('Bricks', 237, 9.0, "This is Poranu bricks. very strong. " ),
  createData('Sand', 262, 16.0, "This is mathugama sand and very good for kapararuwa." ),
  createData('Cement', 305, 3.7, "This is a description of Ultra Cement.." ),
  createData('Sand', 356, 16.0, "This is a description of Ultra Cement."),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="left">Price Per One</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.Price_per_one}</TableCell>
              <TableCell align="left">{row.Quantity}</TableCell>
              <TableCell align="left">{row.Description}</TableCell>
              <TableCell align="left"><AddIcon></AddIcon> &nbsp; <DeleteIcon></DeleteIcon>  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}