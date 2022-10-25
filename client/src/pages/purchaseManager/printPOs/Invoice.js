import { Button, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./invoice.css";
import Table from "./Table";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function Invoice(props) {
  const history = useHistory();
  const location = useLocation();
  const {
    listNew,
    companyName,
    companyAddress,
    clientAddress,
    clientName,
    invoiceNumber,
    invoiceDate,
  } = location.state;
  const [desc, setDesc] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
//   const [listNew, setlistNew] = useState([]);

  console.log(listNew, clientAddress, clientName, invoiceNumber, invoiceDate,companyName,companyAddress);

  useEffect(() => {
    history.push("/purchaseStaff/materialRequest/invoice");
  }, []);

  const sendData = () => {
    console.log("Ayiyoooo");
  };

  return (
    <div>
      <div className="">
        <div className="row gutters">
          <div>
            <div className="card">
              <div className="card-body p-0">
                <div className="invoice-container">
                  <div className="invoice-header">
                    {/* Row start */}
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Stack spacing={2} direction="row">
                          <Button variant="outlined">Download</Button>
                          <Button variant="outlined">Print</Button>
                          <Button variant="outlined" onChange={sendData}>
                            Send
                          </Button>
                        </Stack>
                      </div>
                    </div>
                    {/* roe end */}
                    {/* row start */}
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="invoice-logo">OPTIMA</div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <address className="text-right">
                          161/A, <br />
                          Aggona,
                          <br />
                          Sri Lanka
                        </address>
                      </div>
                    </div>
                    {/* <!-- Row end --> */}
                    {/* <!-- Row start --> */}
                    <div className="row gutters">
                      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="invoice-details">
                          <address>{clientAddress}</address>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="invoice-details">
                          <div className="invoice-num">
                            <span>Invoice: </span>
                            {invoiceNumber}
                            <div>{invoiceDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Row end --> */}
                  </div>
                  <div className="invoice-body">
                    <Table
                      desc={desc}
                      itemCode={itemCode}
                      quantity={quantity}
                      rate={rate}
                      amount={amount}
                      list={listNew}
                      // setList={setList}
                    />
                  </div>
                  <div className="invoice-footer">
                    Thank you for your Business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
