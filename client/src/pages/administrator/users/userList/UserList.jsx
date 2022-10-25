import { DataGrid } from "@material-ui/data-grid";
import {
  DeleteOutline,
  CheckOutlined,
  CancelOutlined,
  EditOutlined,
  SupervisorAccountOutlined,
  PersonAddDisabledOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import SweetAlert from "react-bootstrap-sweetalert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../../../../redux/userApiCalls";
import SearchComponent from "../../../../components/search/Search";

export default function UserList() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [allShow, setAllShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [updateAllShow, setUpdateAllShow] = useState(false);
  const [keyData, setKeyData] = useState("");
  const [valueData, setValueData] = useState("");
  const [userId, setUserId] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState([]);
  const [updateActivate, setUpdateActivate] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.otherUsers);
  // const [data, setData] = useState(userRows);

  // IP address of local machine - 192.168.8.187
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch, deleteTrigger]);

  const URL = `http://localhost:5000/api/v1/user/${userId}`;

  const URl_Update = `http://localhost:5000/api/v1/user/${userId}`;

  const updateConfirm = async (key, value) => {
    // updateUser(userId,UserObject,dispatch);
    let jsonObject;
    if (key === "isActivated") {
      jsonObject = { isActivated: value };
    } else if (key === "isAdmin") {
      jsonObject = { isAdmin: value };
    }
    console.log(jsonObject);
    try {
      let response = await fetch(URl_Update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // token: token,
        },
        body: JSON.stringify(jsonObject),
      });
      let json = await response.json();
      setDeleteTrigger(json);
      console.log(json);
      setUpdateShow(false);
      // setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const deleteConfirm = async () => {
    setShow(false);
    deleteUser(userId, dispatch);
  };
  const deleteCancel = () => {
    setShow(false);
    setUpdateShow(false);
  };

  const handleDelete = (id) => {
    setUserId(id);
    // setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            <img
              className="userListImg"
              src={
                "https://gravatar.com/avatar/932f2d2e75e2483baab6befb7860b327?s=400&d=robohash&r=x"
              }
              alt="User Icon"
            />
         
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 220 },
    { field: "employeeId", headerName: "Employee ID", width: 170 },
    { field: "mobileNumber", headerName: "Mobile No", width: 170 },
    // {
    //   field: "isAdmin",
    //   headerName: "Supplier or Not",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <div className="productListItem">
    //           <div className="productListItemData">
    //             {params.row.isAdmin + " "}
    //           </div>
    //           {params.row.isAdmin ? (
    //             <SupervisorAccountOutlined
    //               className="productListDelete"
    //               style={{ color: "green" }}
    //               onClick={() => {
    //                 setKeyData("isAdmin");
    //                 setValueData(false);
    //                 setUpdateShow(true);
    //                 setUpdateActivate(false);
    //                 setUserId(params.row.id);
    //               }}
    //             />
    //           ) : (
    //             <PersonAddDisabledOutlined
    //               className="productListDelete"
    //               style={{ color: "red" }}
    //               onClick={() => {
    //                 setKeyData("isAdmin");
    //                 setValueData(true);
    //                 setUpdateShow(true);
    //                 setUpdateActivate(true);
    //                 setUserId(params.row.id);
    //               }}
    //             />
    //           )}
    //         </div>
    //       </>
    //     );
    //   },
    // },
    {
      field: "isActivate",
      headerName: "User Activation",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              <div className="productListItemData">
                {params.row.isActivate + " "}
              </div>
              {params.row.isActivate ? (
                <CheckOutlined
                  className="productListDelete"
                  style={{ color: "green" }}
                  onClick={() => {
                    setKeyData("isActivated");
                    setValueData(false);
                    setUpdateShow(true);
                    setUpdateActivate(false);
                    setUserId(params.row.id);
                  }}
                />
              ) : (
                <CancelOutlined
                  className="productListDelete"
                  style={{ color: "red" }}
                  onClick={() => {
                    setKeyData("isActivated");
                    setValueData(true);
                    setUpdateShow(true);
                    setUpdateActivate(true);
                    setUserId(params.row.id);
                  }}
                />
              )}
            </div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              {/* <button className="userListEdit">Edit</button> */}
              <EditOutlined
                className="productListDelete"
                style={{ color: "green", marginRight: 20 }}
              />
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                handleDelete(params.row.id);
                setShow(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="common">
      <div className="userList">
        <div className="top-container-material-request">
          <div className="top-contaier-button-material-request">
            <Link to={"/admin/newUser"}>
              <button className="color-contained-button">Add User</button>
            </Link>
            <Link to={"/admin/newSupplier"}>
              <button
                className="color-contained-button"
                style={{ marginLeft: 10 }}
              >
                Add Supplier
              </button>
            </Link>
          </div>
          <div className="top-container-search-material-request">
            <SearchComponent />
          </div>
        </div>
        <div className="bottom-container-material-request">
          <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={8}
            checkboxSelection
            autoHeight
          />
        </div>
         {/* <SweetAlert
          show={show}
          warning
          showCancel
          confirmBtnText="Yes, Delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={deleteConfirm}
          onCancel={deleteCancel}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert> */}

        {/* <SweetAlert
          show={updateShow}
          warning
          showCancel
          confirmBtnText="Yes, Update it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={() => {
            updateConfirm(keyData, valueData);
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
          title="Successfully update!"
          // text="SweetAlert in React"
          onConfirm={() => setUpdateAllShow(false)}
        ></SweetAlert> */} 

      </div>
    </div>
  );
}
