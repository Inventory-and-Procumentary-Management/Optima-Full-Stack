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
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
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
import Swal from "sweetalert2";
import {
  DeleteOutline,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  EditOutlined,
  CancelOutlined,
  CheckOutlined,
  EditTwoTone,
} from "@material-ui/icons";


const RequestedProductTable = ({name}) => {
    const dispatch = useDispatch();
    const Supplierproducts = useSelector((state) => state.supplierproduct.supplierproducts.filter((x)=>x.isApprove == 0 && x.category == name));
    const userType = useSelector((state) => state.user.userType);
    const [deleteTrigger, setDeleteTrigger] = useState("");
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState("");
    const [approveShow, setApproveShow] = useState(false);
  
    useEffect(() => {
      const getSupplierproductsItems = async () => {
        await getSupplierProducts(dispatch);
      
        // console.log(Supplierproducts)
        // console.log(typeof(Supplierproducts))
  
        //console.log(userType);
      };
      getSupplierproductsItems();
    }, [dispatch, deleteTrigger]);
  
  
    const deleteConfirm = async (id) => {
      await deleteSupplierProduct(id, dispatch);
      setDeleteTrigger("Delete" + deleteTrigger);
    };
  
    const deleteCancel = () => {
      setShow(false);
      setApproveShow(false);
    };
  
    const handleDelete = async (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#378cbb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteConfirm(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
      // setData(data.filter((item) => item.id !== id));
    };
  
    const setPricePerOne = (id) => {
      // setProductId(id);
      Swal.fire({
        title: "Enter new Price Per One",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Update",
        confirmButtonColor: '#378cbb',
        showLoaderOnConfirm: true,
        inputPlaceholder: 'Price Per One',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to add something!'
          }
        },
        preConfirm: (Price_per_one,isApprove) => {
          console.log(Price_per_one);
          if(Price_per_one > 0 ){
            return updateSupplierProduct(id, { price: Price_per_one , isApprove:0 }, dispatch);
          }else{
            return false;
          }
          
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Updated!", "Price has been updated.", "success");
          setDeleteTrigger("price" + deleteTrigger);
        } else {
          Swal.fire(
            "Updated fail!",
            "Price has not been updated.",
            "error"
          );
        }
      });
    };
  
    const setQuantity = (id) => {
    
      Swal.fire({
        title: "Enter new Quantity",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Update",
        confirmButtonColor: '#378cbb',
        showLoaderOnConfirm: true,
        inputPlaceholder: 'Quantity',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to add something!'
          }
        },
        preConfirm: (quantity,isApprove) => {
          //console.log(Price_per_one);
          if(quantity>0){
            return updateSupplierProduct(id, { availableQuantity: quantity , isApprove:0 }, dispatch);
          }else{
            return false;
          }
         
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Updated!", "Quantity has been updated.", "success");
          setDeleteTrigger("quantity" + deleteTrigger);
        } else {
          Swal.fire(
            "Updated fail!",
            "Quantity has not been updated.",
            "error"
          );
        }
      });
    };
  
    const setDescription = (id) => {
    
      Swal.fire({
        title: "Enter new Description",
        input: "string",
        showCancelButton: true,
        confirmButtonText: "Update",
        confirmButtonColor: '#378cbb',
        showLoaderOnConfirm: true,
        inputPlaceholder: 'Description',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to add something!'
          }
        },
        preConfirm: (description,isApprove) => {
          //console.log(Price_per_one);
          
            return updateSupplierProduct(id, { description: description , isApprove:0 }, dispatch);
          
         
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Updated!", "Quantity has been updated.", "success");
          setDeleteTrigger("description" + deleteTrigger);
        } else {
          Swal.fire(
            "Updated fail!",
            "Description has not been updated.",
            "error"
          );
        }
      });
    };
  
  
  
    const columns = [
      // { field: 'id', headerName: '', width: 70 },
     { field: 'itemName', headerName: 'Item', width: 130 },
     { field: 'category', headerName: 'Category', width: 150 },
     { field: 'uom', headerName: 'Unit', width: 130 },
     { field: 'price', headerName: 'Price_Per_One', width: 200 ,
     renderCell: (params) => {
      return (
        <>
          {params.row.price + "   "}
            {userType === "ROLE_SUPPLIER" ? (
              <EditTwoTone
                className="productListDelete"
                style={{ color: "#bdba2c" }}
                onClick={() => {
                  setPricePerOne(params.row.supplier_item_id);
                
                }}
              />
            ) : (
              <></>
            )}
            
        </>
      );
    }, },
     {
       field: 'availableQuantity',
       headerName: 'Quantity',
       width: 160,
       renderCell: (params) => {
        return (
          <>
            {params.row.availableQuantity + "   "}
              {userType === "ROLE_SUPPLIER" ? (
                <EditTwoTone
                  className="productListDelete"
                  style={{ color: "#bdba2c" }}
                  onClick={() => {
                    setQuantity(params.row.supplier_item_id);
                  
                  }}
                />
              ) : (
                <></>
              )}
              
          </>
        );
      }
     },
     {
       field: 'description',
       headerName: 'Description',
       width: 300,
       
     },
     { field: 'Action', headerName: '', width: 200 ,
     renderCell: (params) => {
      
     return (
         <>
         <div>
    
         {/* <Link to="/supplier/Request_product">
                    
                    <li className="sidebarListItem">
                      Update
                      <AddIcon sx={{ color: green[500] }} ></AddIcon>
                    </li>
                  </Link> */}
       
         {/* <h3>Update <AddIcon sx={{ color: green[500] }} ></AddIcon></h3> */}
         
         </div>
         &nbsp;
         &nbsp;
         &nbsp;
         <div>
         {userType === "ROLE_SUPPLIER" ? (
                <button onClick={() => {
                  handleDelete(params.row.supplier_item_id);
                  setShow(true);
                }}>Delete <DeleteIcon sx={{ color: red[500] }}>Delete</DeleteIcon></button>
                
              ) : (
                <></>
              )}
         
         
         </div>
         </>
       );
         },}
    ];
  
  
    // const [displayRequestForm, setdisplayRequestForm] = useState(false);
    // const [itemName, setitemName] = useState("");
    // let SupplierCopy = Supplierproducts;
    // const rows = Object.entries(SupplierCopy);
  
    return (
  
      <div>
        <DataGrid style={{ height: 400, width: '100%' }}
          rows={Supplierproducts}
          columns={columns}
          disableSelectionOnClick
          getRowId={(row)=>row.supplier_item_id}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          // disableMultipleSelection={true}
        />
        </div>  
     
  
  
      
    );
}

export default RequestedProductTable