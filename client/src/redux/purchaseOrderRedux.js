import { createSlice } from "@reduxjs/toolkit";

export const PurchaseOrderSlice = createSlice({
  name: "purchaseOrder",
  initialState: {
    purchaseOrders: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPurchaseOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPurchaseOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.purchaseOrders = action.payload;
    },
    getPurchaseOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePurchaseOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePurchaseOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.purchaseOrders.splice(
        state.purchaseOrders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePurchaseOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePurchaseOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePurchaseOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.purchaseOrders[
        state.purchaseOrders.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.purchaseOrders;
    },
    updatePurchaseOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addPurchaseOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPurchaseOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.purchaseOrders.push(action.payload);
    },
    addPurchaseOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countPurchaseOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countPurchaseOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countPurchaseOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPurchaseOrderStart,
  getPurchaseOrderSuccess,
  getPurchaseOrderFailure,
  deletePurchaseOrderStart,
  deletePurchaseOrderSuccess,
  deletePurchaseOrderFailure,
  updatePurchaseOrderStart,
  updatePurchaseOrderSuccess,
  updatePurchaseOrderFailure,
  addPurchaseOrderStart,
  addPurchaseOrderSuccess,
  addPurchaseOrderFailure,
  countPurchaseOrderStart,
  countPurchaseOrderSuccess,
  countPurchaseOrderFailure,
} = PurchaseOrderSlice.actions;

export default PurchaseOrderSlice.reducer;
