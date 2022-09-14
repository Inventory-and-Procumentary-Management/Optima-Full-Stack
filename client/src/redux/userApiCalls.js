import {
  loginFailure,
  loginStart,
  loginSuccess,
  tokenSave,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
  addUserRoleStart,
  addUserRoleSuccess,
  addUserRoleFailure,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  // const userData = JSON.stringify(user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    console.log(res);
    await dispatch(tokenSave(res.data));
    try {
      const result = await publicRequest.get(`/user/${user.username}`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });
      console.log(result);
      dispatch(loginSuccess(result.data));
      return 1;
      // window.location.href = "http://localhost:3000/";
    } catch (error) {
      return 0;
    }
  } catch (err) {
    dispatch(loginFailure());
    return 0;
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/user/delete/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, User, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/user/update/${id}`);
    dispatch(updateUserSuccess({ id, User }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const addUser = async (User, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/user/save`, User);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

export const addRole = async (User, dispatch) => {
  console.log(User);
  dispatch(addUserRoleStart());
  try {
    const res = await userRequest.post(`/role/addtouser`, User);
    dispatch(addUserRoleSuccess());
  } catch (err) {
    dispatch(addUserRoleFailure());
  }
};

