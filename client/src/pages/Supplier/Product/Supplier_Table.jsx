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
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupplierProduct,
  getSupplierProducts,
  updateSupplierProduct,
} from "../../../redux/SupplierProductApiCalls";
import MenuItem from '@mui/material/MenuItem';






const columns = [
  // { field: 'id', headerName: '', width: 70 },
 { field: 'itemName', headerName: 'Item', width: 130 },
 { field: 'category', headerName: 'Category', width: 150 },
 { field: 'uom', headerName: 'Unit', width: 130 },
 { field: 'price', headerName: 'Price_Per_One', width: 200 },
 {
   field: 'availableQuantity',
   headerName: 'Quantity',
   width: 160,
 },
 {
   field: 'description',
   headerName: 'Description',
   width: 300,
 },
 { field: 'Button', headerName: '', width: 200 ,
 renderCell: (params) => {
  
 return (
     <>
     <div>

     <Link to="/supplier/Request_product">
                {/* {history.push("/purchaseStaff/materialRequest")} */}
                <li className="sidebarListItem">
                  Update
                  <AddIcon sx={{ color: green[500] }} ></AddIcon>
                </li>
              </Link>
   
     {/* <h3>Update <AddIcon sx={{ color: green[500] }} ></AddIcon></h3> */}
     
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

// const rows = [
//  { id: 1, Item: 'Cement',Unit:'Bag', Price_per_one: '3200',Quantity:12 , Description: 'Ultra Cement and the and ajantha Cement' },
//  { id: 2, Item: 'Sand',Unit:'Cube', Price_per_one: '13000',Quantity:12, Description: 'Ultra Cement and the and ajantha Cement' },
//  { id: 3, Item: 'Bricks',Unit:'', Price_per_one: '100',Quantity:12, Description: '' },
//  { id: 4, Item: '1" Pipe',Unit:'', Price_per_one: '1000',Quantity:12, Description: 'Slone Pipe' },
//  { id: 5, Item: '1 1/2" Pipe',Unit:'', Price_per_one: '1000',Quantity:12, Description: 'Slone Pipe' },
//  { id: 6, Item: '1 3/4" Pipe',Unit:'', Price_per_one: '1100',Quantity:12, Description: 'Slone Pipe' },
//  { id: 7, Item: '2" Pipe',Unit:'', Price_per_one: '1200',Quantity:12, Description: 'Slone Pipe' },
//  { id: 8, Item: '1 ft Tile',Unit:'', Price_per_one: '1500',Quantity:12, Description: 'Lanka tile and american tile contain' },
//  { id: 9, Item: '1 1/2 Tile',Unit:'', Price_per_one: '1500',Quantity:12, Description: 'Lanka tile and american tile contain' },
// ];




export default function BasicTable() {
  const dispatch = useDispatch();
  const Supplierproducts = useSelector((state) => state.supplierproduct.supplierproducts.filter((x)=>x.isApprove == 1));
  const userType = useSelector((state) => state.user.userType);
  const [deleteTrigger, setDeleteTrigger] = useState("");

  useEffect(() => {
    const getSupplierproductsItems = async () => {
      await getSupplierProducts(dispatch);
    
      console.log(Supplierproducts)
      console.log(typeof(Supplierproducts))

      //console.log(userType);
    };
    getSupplierproductsItems();
  }, [dispatch, deleteTrigger]);

  const appruiedItem = Supplierproducts.map(({isApprove})=>{if({isApprove} != 1 ){}})
console.log(appruiedItem);


  // const [displayRequestForm, setdisplayRequestForm] = useState(false);
  // const [itemName, setitemName] = useState("");
  // let SupplierCopy = Supplierproducts;
  // const rows = Object.entries(SupplierCopy);

  return (

    <div>
      <DataGrid style={{ height: 400, width: '100%' }}
        rows={Supplierproducts}
        columns={columns}
        getRowId={(row)=>row.supplier_item_id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={true}
        // disableMultipleSelection={true}
      />
      </div>    

    
  );
}