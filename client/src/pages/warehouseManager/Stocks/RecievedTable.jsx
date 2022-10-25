import { useEffect, useState } from "react";
import "../../pages.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

// import SweetAlert from "react-bootstrap-sweetalert";

import { useDispatch, useSelector } from "react-redux";
import { inventoryData } from "../../../constants/DashboardData";

// import Button from "@mui/material/Button";
import SearchComponent from "../../../components/search/Search";
import {
  deleteInventory,
  getInventory,
  updateInventory,
} from "../../../redux/inventoryApiCalls";



export default function RecievedTable(){

  const dispatch = useDispatch();
  const userType = useSelector((state) => state.user.userType);
  const inventories = useSelector((state) => state.inventory.inventories);
  

  const [deleteTrigger, setDeleteTrigger] = useState("");

  useEffect(() => {
    const getNewInventory = async () => {
      await getInventory(dispatch);
      
    };
    getNewInventory();
    console.log(inventories)
  }, [dispatch, deleteTrigger]);

  const columns = [
    { field: "inventory_id", headerName: "Request ID", width: 160 },
    // {
    //   field: "title",
    //   headerName: "Item Name",
    //   width: 220,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         {/* <img
    //           className="userListImg"
    //           src={params.row.img}
    //           alt="category Icon"
    //         /> */}
    //         {params.row.title}
    //       </div>
    //     );
    //   },
    // },
    //{ field: "uom", headerName: "Unit of Messurement", width: 180 },
    { field: "sectionQuantity", headerName: "Quantity", width: 180 },
    //{ field: "receivedDate", headerName: "Request Date", width: 180 },
    
    {
      field: "receivedDate",
      headerName: "Request Date",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            
            {params.row.receivedDate.slice(0, 10).replace("T", " ")}
          </div>
        );
      },
    },
    {
      field: "expiredDate",
      headerName: "Expire Date",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            
            {params.row.expiredDate.slice(0, 10).replace("T", " ")}
          </div>
        );
      },
    },


    //{ field: "expiredDate", headerName: "Expire Date", width: 180 },
    { field: "receivedLocation", headerName: "Placement", width: 180 },
   
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 180,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           {!params.row.isCancel ? (
  //             <button
  //               className="userListEdit"
  //               // onClick={() => {
  //               //   setUpdateShow(true);
  //               //   setCartId(params.row._id);
  //               //   setIsCancelStatus(false);
  //               // }}
  //               style={{ backgroundColor: "red" }}
  //             >
  //               Cancel
  //             </button>
  //           ) : (
  //             <button
  //               className="userListEdit"
  //               style={{ backgroundColor: "red" }}
  //               // onClick={() => {
  //               //     setUpdateShow(true);
  //               //     setCartId(params.row._id);
  //               //     setIsCancelStatus(true);
  //               //   }}
  //             >
  //               Request Received
  //             </button>
  //           )}
  //         </>
  //       );
  //     },
  //   },
  ];
  




  return (
    <div >
      <div className="userListInventory">
        <div className="top-container-material-request">
          
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div>
        <div className="bottom-container-material-request">
          <DataGrid
            rows={inventories}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row.inventory_id}
            pageSize={7}
            checkboxSelection
            autoHeight
            // componentsProps={{
            //   columnMenu: {
            //     background: "red",
            //     // counter: rows.length
            //   },
            // }}
          />
        </div>
        {/* <SweetAlert
          show={show}
          warning
          showCancel
          confirmBtnText="Yes, Update it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={orderUpdate}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>

        <SweetAlert
          show={updateShow}
          warning
          showCancel
          confirmBtnText="Yes, Cancel Order!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={() => {
            if (isCancelStatus === true) {
              updateConfirm("status", "Cancel");
            } else {
              updateConfirm("isCancel", true);
            }
          }}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert> */}

        {/* <SweetAlert
        show={allShow}
        success
        title="Successfully delete!"
        // text="SweetAlert in React"
        onConfirm={() => setAllShow(false)}
      ></SweetAlert> */}

        {/* <SweetAlert
          show={updateAllShow}
          success
          title="Request Send!"
          // text="SweetAlert in React"
          onConfirm={() => setUpdateAllShow(false)}
        ></SweetAlert> */}
      </div>
    </div>
  );
};

