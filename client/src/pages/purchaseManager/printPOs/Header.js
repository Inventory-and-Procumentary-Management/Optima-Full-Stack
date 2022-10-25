import React from "react";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

export default function Header({ handlePrint, title, flag }) {
  const history = useHistory();

  const handleSend = async () => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#378cbb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // deleteConfirm(id);
        Swal.fire("Sent!", "Stocks have been sent.", "success");
        
        history.push("/warehouseManager/inventory");
      }
    });
    // setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            {title}
          </h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li className="mx-2">
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white 
              font-bold py-2 px-8 rounded shadow border-2 border-gray-500
              hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button
                className="bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Download
              </button>
            </li>

            {flag && (
              <li className="mx-2">
                <button
                  className="bg-green-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-green-500
        hover:bg-transparent hover:text-green-500 transition-all duration-300"
                  onClick={() => {
                    handleSend();
                  }}
                >
                  Send
                </button>
              </li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}
