//import React from 'react'
import "../../pages.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';

import Pagination from "./Pagination";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
  createData("Sand", "Cubes", 5, "sea"),
  createData("Cement", "Packet", 29, "Mahaweli"),
];

export default function InventoryTable() {
  return (
    <TableContainer component={Paper} style={{marginTop: "20px"}}>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Quantity Type</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">
                <Button style={{backgroundColor:"#FFB000", color:"black"}}
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
