import { createSlice } from "@reduxjs/toolkit";

export const supplierOrderSlice = createSlice({
  name: "supplierorder",
  initialState: {
    supplierorders: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSupplierOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSupplierOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierorders = action.payload;
    },
    getSupplierOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSupplierOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSupplierOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierorders.splice(
        state.supplierorders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSupplierOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSupplierOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSupplierOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierorders[
        state.supplierorders.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.supplierorder;
    },
    updateSupplierOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addSupplierOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSupplierOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierorders.push(action.payload);
    },
    addSupplierOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countSupplierOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countSupplierOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countSupplierOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSupplierOrderStart,
  getSupplierOrderSuccess,
  getSupplierOrderFailure,
  deleteSupplierOrderStart,
  deleteSupplierOrderSuccess,
  deleteSupplierOrderFailure,
  updateSupplierOrderStart,
  updateSupplierOrderSuccess,
  updateSupplierOrderFailure,
  addSupplierOrderStart,
  addSupplierOrderSuccess,
  addSupplierOrderFailure,
  countSupplierOrderStart,
  countSupplierOrderSuccess,
  countSupplierOrderFailure,
} = supplierOrderSlice.actions;

export default supplierOrderSlice.reducer;