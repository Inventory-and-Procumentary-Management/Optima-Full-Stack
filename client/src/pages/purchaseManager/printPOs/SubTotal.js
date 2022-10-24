import React from "react";

export default function SubTotal({ subTotal, discount, tax, total }) {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          {/* <li className="p-1">
            <span className="font-bold">Sub Total(Rs.) : </span>
            {subTotal}
          </li>
          <li className="p-1">
            <span className="font-bold">Discount(%) : </span>
            {discount}
          </li>
          <li className="p-1">
            <span className="font-bold">Tax(%) : </span>
            {tax}
          </li> */}
          <hr className="p-1 bg-gray-100"/>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Total(Rs.) : </span>
            {total}
          </li>
          <hr className="b-5 bg-gray-100"/>
        </ul>
      </article>
    </>
  );
}
