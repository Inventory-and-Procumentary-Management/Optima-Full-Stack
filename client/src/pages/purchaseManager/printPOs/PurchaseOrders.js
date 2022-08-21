import { useState } from "react";
import './printPOs.css';
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import { Button } from "@mui/material";

function PurchaseOrders() {
const [showInvoice, setShowInvoice] = useState(false)
const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [bankName, setBankName] = useState("")
const [bankAccount, setBankAccount] = useState("")
const [webSite, setWebSite] = useState("")
const [clientName, setClientName] = useState("")
const [clientAddress, setClientAddresse] = useState("")
const [invoiceNum, setInvoiceNum] = useState("")
const [invoiceDate, setInvoiceDate] = useState("")
const [dueDate, setDueDate] = useState("")
const [notes, setNotes] = useState("")
const [desc, setDesc] = useState("")
const [quantity, setQuantity] = useState("")
const [price, setPrice] = useState("")
const [amount, setAmount] = useState("")
const [list,setList] = useState([])

const handlePrint =()=>{
  window.print()
}

  return (
    <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      {showInvoice ? ( <div>
      <Header  handlePrint = {handlePrint}/>
      
      <MainDetails name={name} address={address} />
    
     <ClientDetails clientName={clientName} clientAddress={clientAddress} />
     
     <Dates invoiceNum={invoiceNum} invoiceDate={invoiceDate} dueDate={dueDate}/>
    
     <Table 
     desc={desc} 
     quantity={quantity} 
     price={price} 
     amount={amount}
     list={list}
     setList={setList}
     />

     <Notes notes={notes}/>
     
     <Footer 
     name={name} 
     email={email} 
     phone={phone}
     webSite={webSite}
     bankAccount={bankAccount}
     bankName={bankName}
     />

     <button
        onClick={()=> setShowInvoice(false)}
        className="bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
      </div>) : (
      <>
       <div className="flex flex-col justify-center">
      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="name">Enter the name</label>
        <input 
          type="text"
          name="text"
          id="text"
          placeholder="Enter"
          autoComplete="off" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>

      <div className="flex flex-col">
      <label htmlFor="address">Enter the address</label>
            <input 
              type="text"
              name="address"
              id="address"
              placeholder="Enter address"
              autoComplete="off" 
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              />
      </div>
      </article>

      <article className="md:grid grid-cols-3 gap-10">
       <div className="flex flex-col">
        <label htmlFor="email">Enter the email</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          autoComplete="off" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
       </div>

        <div className="flex flex-col">
        <label htmlFor="webSite">Enter the webSite</label>
        <input 
          type="text"
          name="webSite"
          id="webSite"
          placeholder="Enter webSite"
          autoComplete="off" 
          value={webSite}
          onChange={(e)=>setWebSite(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="phone">Enter the phone</label>
        <input 
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter phone"
        autoComplete="off" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />
        </div>

        </article>

      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="bankName">Enter the Bank Name</label>
        <input 
          type="text"
          name="bankName"
          id="bankName"
          placeholder="Enter bankName"
          autoComplete="off" 
          value={bankName}
          onChange={(e)=>setBankName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="bankAccount">Enter the Bank Account Number</label>
       <input 
        type="text"
        name="bankAccount"
        id="bankAccount"
        placeholder="Enter bankAccount"
        autoComplete="off" 
        value={bankAccount}
        onChange={(e)=>setBankAccount(e.target.value)}
        />
        </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10 md:mt-16">
        <div className="flex flex-col">
        <label htmlFor="clientName">Enter the client's Name</label>
        <input 
          type="text"
          name="clientName"
          id="clientName"
          placeholder="Enter clientName"
          autoComplete="off" 
          value={clientName}
          onChange={(e)=>setClientName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="clientAddress">Enter the client's Address</label>
        <input 
          type="text"
          name="clientAddress"
          id="clientAddress"
          placeholder="Enter client's Address"
          autoComplete="off" 
          value={clientAddress}
          onChange={(e)=>setClientAddresse(e.target.value)}
        />
        </div>
      </article>

      <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
      <label htmlFor="invoiceNum">Enter the Invoice Number</label>
       <input 
        type="text"
        name="invoiceNum"
        id="invoiceNum"
        placeholder="Enter Invoice Number"
        autoComplete="off" 
        value={invoiceNum}
        onChange={(e)=>setInvoiceNum(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="invoiceDate">Enter the Invoice Date</label>
       <input 
        type="date"
        name="invoiceDate"
        id="invoiceNum"
        invoiceDate="Enter Invoice Date"
        autoComplete="off" 
        value={invoiceDate}
        onChange={(e)=>setInvoiceDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="dueDate">Enter the Due Date</label>
        <input 
          type="date"
          name="dueDate"
          id="dueDate"
          invoiceDate="Enter Due Date"
          autoComplete="off" 
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}
          />
      </div>
      </article>

      <article>
          <TableForm 
          desc={desc}
          setDesc={setDesc}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          amount={amount}
          setAmount={setAmount}
          list={list}
          setList={setList}
          />
        </article>
<label htmlFor="notes">Additional Notes</label>
        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client"
        value={notes} onChange={(e) => setNotes(e.target.value)}>
        </textarea>
        <button onClick={() => setShowInvoice(true)}
        className="bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300">
          Preview Invoice
        </button>
        <Button variant="contained" size="medium">jk</Button>
       </div>
      </>
      )}
        
    </main>
  
    </>
  );
}

export default PurchaseOrders;
