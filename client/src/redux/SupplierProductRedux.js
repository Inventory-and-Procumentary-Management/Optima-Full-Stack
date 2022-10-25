import { createSlice } from "@reduxjs/toolkit";

export const supplierProductSlice = createSlice({
  name: "supplierproduct",
  initialState: {
    supplierproducts: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSupplierProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSupplierProductSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierproducts = action.payload;
    },
    getSupplierProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSupplierProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSupplierProductSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierproducts.splice(
        state.supplierproducts.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSupplierProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSupplierProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSupplierProductSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierproducts[
        state.supplierproducts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.supplierproducts;
    },
    updateSupplierProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addSupplierProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSupplierProductSuccess: (state, action) => {
      state.isFetching = false;
      state.supplierproducts.push(action.payload);
    },
    addSupplierProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countSupplierProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countSupplierProductSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countSupplierProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSupplierProductStart,
  getSupplierProductSuccess,
  getSupplierProductFailure,
  deleteSupplierProductStart,
  deleteSupplierProductSuccess,
  deleteSupplierProductFailure,
  updateSupplierProductStart,
  updateSupplierProductSuccess,
  updateSupplierProductFailure,
  addSupplierProductStart,
  addSupplierProductSuccess,
  addSupplierProductFailure,
  countSupplierProductStart,
  countSupplierProductSuccess,
  countSupplierProductFailure,
} = supplierProductSlice.actions;

export default supplierProductSlice.reducer;