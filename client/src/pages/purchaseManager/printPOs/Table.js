import React from "react";
import "./invoice.css";

function Table ({ list }) {
  return (
    <div className="row gutters">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="table-responsive">
        <table className="table custom-table m-0" style={{
          width:'100%'
        }}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          {list.map(({ id, desc,itemCode, quantity, rate, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{itemCode}</td>
                <td>{quantity}</td>
                <td>{rate}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
        </table>
      </div>
    </div>
  </div>
  );
}

export default Table;