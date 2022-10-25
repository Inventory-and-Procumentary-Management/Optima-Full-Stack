import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import ClientDetails from "../../purchaseManager/printPOs/ClientDetails";
import Dates from "../../purchaseManager/printPOs/Dates";
import Footer from "../../purchaseManager/printPOs/Footer";
import Header from "../../purchaseManager/printPOs/Header";
import MainDetails from "../../purchaseManager/printPOs/MainDetails";
import Notes from "../../purchaseManager/printPOs/Notes";
import Table from "./TableInvoice";
import TableForm from "./TableForm";
import './printPO_supplier.css'



import './SupplierInvoicesStyle.css'

const Supplier_Invoices = () => {

  const [showInvoice, setShowInvoice] = useState(true)
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

  const handlePrint =()=>{
    window.print()
  }
    // const { useState } = React;
    // const [myArray, setMyArray] = useState([]);
    // const [data, setData] = useState('');

 
 

    // const handleChange = (event) => {
    //     //console.log(event.target.value);
    //     setdata(data , event.target.value);
    //     console.log(data)
         
        
    // };
  
  //   const handleSubmit = () => {
          
  //     setMyArray(myArray => [...myArray, data]);
      
  // }
  
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

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

            <Table
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
            </button>
          </div>
        ) : (
          <>
            
          </>
        )}
      </main>
    </>
  );
      }

export default Supplier_Invoices;