import React from "react";
import Header from "./Header";
import "./printPOs.css";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import SubTotal from "./SubTotal";

const PrintInvoice = (props) => {
  const handlePrint = () => {
    window.print();
    
  };
  //console.log(props);
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      <div>
        <Header handlePrint={handlePrint} title={props.title} flag={props.flag} />

        <MainDetails
          name={props.ourName}
          address={props.ourAddress}
        />

        <ClientDetails clientName={props.clientName} clientAddress={props.clientAddress} />

        <Dates
          invoiceNum={props.invoiceNum}
          invoiceDate={props.invoiceDate}
          dueDate={props.dueDate}
        />

        <Table
          desc={props.desc}
          quantity={props.quantity}
          price={props.price}
          amount={props.amount}
          list={props.list}
          setList={props.setList}
          
        />

        <Notes notes={props.notes} />

        <SubTotal subTotal={props.subTotal} discount={props.discount} tax={props.tax} total={props.total} />
      </div>
    </main>
  );
};

export default PrintInvoice;
