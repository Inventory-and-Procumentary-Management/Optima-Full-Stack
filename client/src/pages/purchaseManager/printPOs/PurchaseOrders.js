import { useState } from "react";
import "./printPOs.css";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function PurchaseOrders() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [webSite, setWebSite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddresse] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    history.push("/purchaseStaff/newMaterialRequest");
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails
              name={"OPTIMA"}
              address={"161/A, Aggona, Malabe, Sri Lanka"}
            />

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
              desc={desc}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
            />

            <Notes notes={notes} />

            {/* <Footer 
     name={"OPTIMA"} 
     email={"optima@gmail.com"} 
     phone={"0116598453"}
     /> */}

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
            <div className="flex flex-col justify-center">
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
              {/* <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button> */}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default PurchaseOrders;
