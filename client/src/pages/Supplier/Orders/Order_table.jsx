import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Organization', headerName: 'Organization', width: 130 },
    { field: 'Due_date', headerName: 'Due date', width: 130 },
    {
      field: 'Description',
      headerName: 'Description',
      width: 160,
    },
    { field: 'More', headerName: 'More Details', width: 130 },
  ];
  
  const rows = [
    { id: 1, Organization: 'Snow', Due_date: '2022-05-06', Description: 'sdvfsodjvglsdj' },
    { id: 2, Organization: 'Lannister', Due_date: '2022-09-15', Description: 'sdvfsodjvglsdj' },
    { id: 3, Organization: 'Lannister', Due_date: '2022-09-16', Description: 'sdvfsodjvglsdj' },
    { id: 4, Organization: 'Stark', Due_date: '2022-09-17', Description: 'sdvfsodjvglsdj' },
    { id: 5, Organization: 'Targaryen', Due_date: '2022-09-18', Description: 'sdvfsodjvglsdj' },
    { id: 6, Organization: 'Melisandre', Due_date: '2022-09-19', Description: 'sdvfsodjvglsdj' },
    { id: 7, Organization: 'Clifford', Due_date: '2022-09-20', Description: 'sdvfsodjvglsdj' },
    { id: 8, Organization: 'Frances', Due_date: '2022-09-23', Description: 'sdvfsodjvglsdj' },
    { id: 9, Organization: 'Roxie', Due_date: '2022-09-29', Description: 'sdvfsodjvglsdj' },
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