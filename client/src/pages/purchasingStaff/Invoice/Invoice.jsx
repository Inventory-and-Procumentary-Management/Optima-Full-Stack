import React from "react";
import PrintInvoice from "../../purchaseManager/printPOs/PrintInvoice";

const InvoiceData = (props) => {
  return (
    <div>
      <PrintInvoice
        ourName={"OPTIMA"}
        ourAddress={"161/A, Aggona, Malabe, Sri Lanka"}
        clientName={props.senderName}
        clientAddress={props.receiverName}
        invoiceNum={`PO-${props.purchase_order_id}`}
        invoiceDate={props.issueDate}
        dueDate={props.dueDate}
        // desc={"Sand"}
        // quantity={152}
        // price={50}
        // amount={300000}
        list={props.dataList}
        // setList={}
        // notes={}
        subTotal={props.total}
        discount={25}
        tax={56}
        total={props.total}
        title={"Purchase Order"}
        flag={false}
      />
    </div>
  );
};

export default InvoiceData;
