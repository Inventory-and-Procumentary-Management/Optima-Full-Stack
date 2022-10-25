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

function PurchaseOrders({
  smId,
  smName,
  dispatchNumber,
  dispatchDate,
  itemName,
  dispatchQuantity,
  smIdv,
  smNamev,
  oProductsv,
}) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [webSite, setWebSite] = useState("");
  const [siteManagerId, setSiteManagerId] = useState("");
  const [siteManagerName, setSiteManagerName] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const twoCalls = (e) => {
    this.functionOne(e);
    this.functionTwo();
  };

  const handlePrint = () => {
    window.print();
  };
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              siteManagerId={siteManagerId}
              siteManagerName={siteManagerName}
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

            <Footer
              name={name}
              email={email}
              phone={phone}
              webSite={webSite}
              bankAccount={bankAccount}
              bankName={bankName}
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
            <div className="flex flex-col justify-center">
              {/* <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter the name</label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setWebSite(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter the Bank Account Number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter bankAccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article> */}

              <article className="md:grid grid-cols-2 gap-10 md:mt-1">
                <div className="flex flex-col">
                  <label htmlFor="clientName">{smId}</label>
                  <input
                    type="text"
                    name="sitemanagerId"
                    id="sitemanagerId"
                    placeholder="Enter Site Manager's ID"
                    autoComplete="off"
                    value={siteManagerId}
                    onChange={(e) => setSiteManagerId(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">{smName}</label>
                  <input
                    type="text"
                    name="sitemanagerName"
                    id="sitemanagerName"
                    placeholder="Enter Site Manager's Name"
                    autoComplete="off"
                    value={siteManagerName}
                    onChange={(e) => setSiteManagerName(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNum">{dispatchNumber}</label>
                  <input
                    type="text"
                    name="invoiceNum"
                    id="invoiceNum"
                    placeholder="Enter Dispatch Number"
                    autoComplete="off"
                    value={invoiceNum}
                    onChange={(e) => setInvoiceNum(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate"> {dispatchDate}</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceNum"
                    invoiceDate="Enter Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col" style={{ visibility: "hidden" }}>
                  <label htmlFor="dueDate">Enter the Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    invoiceDate="Enter Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  itemName={itemName}
                  dispatchQuantity={dispatchQuantity}
                  desc={desc}
                  setDesc={setDesc}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  // price={price}
                  // setPrice={setPrice}
                  // amount={amount}
                  // setAmount={setAmount}
                  list={list}
                  setList={setList}
                />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the Site Manager"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Form
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default PurchaseOrders;
