import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    otherUsers: null,
    userType: null,
    isFetching: false,
    token: null,
    refersh_token: null,
    error: false,
  },
  reducers: {
    tokenSave: (state, action) => {
      state.token = action.payload.access_token;
      state.refersh_token = action.payload.refersh_token;
    },
    userTypeSave: (state, action) => {
      state.userType = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.token = null;
      state.refersh_token = null;
      state.userType = null;
    },

    //GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.otherUsers = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.otherUsers.splice(
        state.otherUsers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.otherUsers[
        state.otherUsers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.User;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.otherUsers.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //add role
    addUserRoleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserRoleSuccess: (state) => {
      state.isFetching = false;
      // state.otherUsers.push(action.payload);
    },
    addUserRoleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
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
  userTypeSave,
} = userSlice.actions;
export default userSlice.reducer;
