import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    token:null,
    refersh_token:null,
    error: false,
  },
  reducers: {
    tokenSave: (state,action) => {
      state.token = action.payload.access_token;
      state.refersh_token = action.payload.refersh_token;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, tokenSave } = userSlice.actions;
export default userSlice.reducer;
