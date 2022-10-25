import { createSlice } from "@reduxjs/toolkit";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    suppliers: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSupplierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSupplierSuccess: (state, action) => {
      state.isFetching = false;
      state.suppliers = action.payload;
    },
    getSupplierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSupplierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSupplierSuccess: (state, action) => {
      state.isFetching = false;
      state.suppliers.splice(
        state.suppliers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSupplierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSupplierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSupplierSuccess: (state, action) => {
      state.isFetching = false;
      state.suppliers[
        state.suppliers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateSupplierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addSupplierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSupplierSuccess: (state, action) => {
      state.isFetching = false;
      state.suppliers.push(action.payload);
    },
    addSupplierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countSupplierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countSupplierSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countSupplierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSupplierStart,
  getSupplierSuccess,
  getSupplierFailure,
  deleteSupplierStart,
  deleteSupplierSuccess,
  deleteSupplierFailure,
  updateSupplierStart,
  updateSupplierSuccess,
  updateSupplierFailure,
  addSupplierStart,
  addSupplierSuccess,
  addSupplierFailure,
  countSupplierStart,
  countSupplierSuccess,
  countSupplierFailure,
} = supplierSlice.actions;

export default supplierSlice.reducer;