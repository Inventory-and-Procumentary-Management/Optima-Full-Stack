import { createSlice } from "@reduxjs/toolkit";

export const InventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventories: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getInventoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getInventorySuccess: (state, action) => {
      state.isFetching = false;
      state.inventories = action.payload;
    },
    getInventoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteInventoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteInventorySuccess: (state, action) => {
      state.isFetching = false;
      state.inventories.splice(
        state.inventories.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteInventoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateInventoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateInventorySuccess: (state, action) => {
      state.isFetching = false;
      state.inventories[
        state.inventories.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.inventories;
    },
    updateInventoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addInventoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addInventorySuccess: (state, action) => {
      state.isFetching = false;
      state.inventories.push(action.payload);
    },
    addInventoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countInventoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countInventorySuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countInventoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getInventoryStart,
  getInventorySuccess,
  getInventoryFailure,
  deleteInventoryStart,
  deleteInventorySuccess,
  deleteInventoryFailure,
  updateInventoryStart,
  updateInventorySuccess,
  updateInventoryFailure,
  addInventoryStart,
  addInventorySuccess,
  addInventoryFailure,
  countInventoryStart,
  countInventorySuccess,
  countInventoryFailure,
} = InventorySlice.actions;

export default InventorySlice.reducer;
