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
import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupplierOrders,
  getSupplierOrders,
  updateSupplierOrders,
} from "../../../redux/SupplierOrdersApiCalls";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import ClientDetails from "../../purchaseManager/printPOs/ClientDetails";
import Dates from "../../purchaseManager/printPOs/Dates";
import Footer from "../../purchaseManager/printPOs/Footer";
import Header from "../../purchaseManager/printPOs/Header";
import MainDetails from "../../purchaseManager/printPOs/MainDetails";
import Notes from "../../purchaseManager/printPOs/Notes";
import TableInvoice from "../invoices/TableInvoice";
import TableForm from "../invoices/TableForm";
import '../invoices/printPO_supplier.css'
import '../invoices/SupplierInvoicesStyle.css'
import "./OrderStyle.css" ;
import {
  deleteSupplierProduct,
  getSupplierProducts,
  updateSupplierProduct,
} from "../../../redux/SupplierProductApiCalls";



const Order_table = () => {

  const dispatch = useDispatch();
  const SupplierOrders = useSelector((state) => state.supplierorder.supplierorders.filter((x)=>x.supplierId == 84 && x.status == false));
  const Supplierproducts = useSelector((state) => state.supplierproduct.supplierproducts.filter((x)=>x.isApprove == 1));
  const userType = useSelector((state) => state.user.userType);
  const userID = useSelector((state) => state.user.userID);
  const [deleteTrigger, setDeleteTrigger] = useState("");

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("Janatha Hardware Pvt Lmd")
  const [address, setAddress] = useState("282/1/G , Ashokarama Road, Ihala Bomiriya, Kaduwela")
  const [email, setEmail] = useState("Janatha Hardware@gmail.com")
  const [phone, setPhone] = useState("0765768600")
  const [clientName, setClientName] = useState("SMG Constructions Pvt Lmd")
  const [clientAddress, setClientAddresse] = useState("85/K Himbutana , Angoda")
  const [invoiceNum, setInvoiceNum] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [desc, setDesc] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [itemCode, setitemCode] = useState("")
  const [list,setList] = useState([])
  const [orderProduct, setorderProduct] = ([]);

  const [x, setX] = useState(0);
const setXHandler = (y) => {
  setX(y)
}

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'issueDate', headerName: 'Issue Date', width: 200, 
    renderCell: (params) => {
      return (
        <>
         {params.row.issueDate.slice(0, 10).replace("T", " ")}
        {/* {params.row.Items} */}
        </>
      );
        } },
    { field: 'dueDate', headerName: 'Due date', width: 200, 
    renderCell: (params) => {
      return (
        <>
         {params.row.dueDate.slice(0, 10).replace("T", " ")}
        {/* {params.row.Items} */}
        </>
      );
        }  },
        
  
    { field: 'More', headerName: 'Review ', width: 300 ,
    renderCell: (params) => {

     return (

       <div >
       <OrderMoreDetailsPopup 
       details={params.row.Items} 
       IssueDate = {params.row.issueDate.slice(0, 10).replace("T", " ")}
       DueDate = {params.row.dueDate.slice(0, 10).replace("T", " ")}
       Description = {params.row.orderProducts}
       AllDetails = {Supplierproducts}
       PurchaseOrderID = {params.row.purchase_order_id}
       onChange={setXHandler}
       ></OrderMoreDetailsPopup>
       {/* {params.row.Items} */}
       </div>
     );
       },
      
      },
      

  ];


  
  const handlePrint =()=>{
    window.print()
  }
  



  useEffect(() => {
    const getSupplierOrdersItems = async () => {
      await getSupplierOrders(dispatch);
    
      console.log(SupplierOrders);
      // console.log(typeof(Supplierproducts))

      //console.log(userType);
    };
    getSupplierOrdersItems();
  }, [dispatch, deleteTrigger, x]);

  useEffect(() => {
    const getSupplierproductsItems = async () => {
      await getSupplierProducts(dispatch);
    
      // console.log(Supplierproducts)
      // console.log(typeof(Supplierproducts))

      //console.log(userType);
    };
    getSupplierproductsItems();
  }, [dispatch, deleteTrigger]);

  // const acceptOrderUpdate=(id)=>{

  //   updateSupplierOrders(id,{status: true});

  // }

    return (
      <div>
      {showInvoice ? (<div><Header handlePrint={handlePrint} />

      <MainDetails name={name} address={address} />
      
      <ClientDetails
        clientName={clientName}
        clientAddress={clientAddress}
      />
      
      <Dates
        invoiceNum={invoiceNum}
        invoiceDate={invoiceDate}
        dueDate={dueDate}
      />
      
      <TableInvoice
        list={list}
      />
      
      <Notes notes={notes} />
      
      <Footer
        name={name}
        email={email}
        phone={phone}
      
      />
      
      <button
        onClick={() => setShowInvoice(false)}
        className="bg-blue-500 text-white 
      font-bold py-2 px-8 rounded shadow border-2 border-blue-500
      hover:bg-transparent hover:text-blue-500 transition-all duration-300"
      >
        Edit Information
      </button></div>):
        (<div>
      
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={SupplierOrders}
        columns={columns}
        pageSize={5}
        getRowId={(row)=>row.purchase_order_id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        
      />
      
    </div>
    </div>)}
    </div>
      
        
      );
}

export default Order_table