import React from "react";

export default function Dates({ invoiceNum, invoiceDate, dueDate }) {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number:</span>
            {invoiceNum}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice date:</span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date:</span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
