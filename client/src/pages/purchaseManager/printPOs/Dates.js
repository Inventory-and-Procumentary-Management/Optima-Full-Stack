import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Dates({ invoiceNum, invoiceDate, dueDate }) {
  const [date, setDate] = useState();
  const [dueDate1, setDueDate1] = useState();
  useEffect(() => {
    const convertDate = () => {
      // var dateParts = isoFormatDateString.split("-");
      let date2 = invoiceDate.slice(0, 10).replace("T", " ");
      let date3 = dueDate.slice(0, 10).replace("T", " ");
      // let date2 = new Date(Date.parse(invoiceDate.replace(/-/g, "/")));
      setDate(date2);
      setDueDate1(date3);
    };
    convertDate();
  }, []);
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number : </span>
            {invoiceNum}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice date : </span>
            {date}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date : </span>
            {dueDate1}
          </li>
        </ul>
      </article>
    </>
  );
}
