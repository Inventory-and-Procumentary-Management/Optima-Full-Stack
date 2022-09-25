import { createSlice } from "@reduxjs/toolkit";

export const InventoryItemSlice = createSlice({
  name: "inventoryItem",
  initialState: {
    inventoryItems: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getInventoryItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getInventoryItemSuccess: (state, action) => {
      state.isFetching = false;
      state.inventoryItems = action.payload;
    },
    getInventoryItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteInventoryItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteInventoryItemSuccess: (state, action) => {
      state.isFetching = false;
      state.inventoryItems.splice(
        state.inventoryItems.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteInventoryItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateInventoryItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateInventoryItemSuccess: (state, action) => {
      state.isFetching = false;
      state.inventoryItems[
        state.inventoryItems.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.inventoryItems;
    },
    updateInventoryItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addInventoryItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addInventoryItemSuccess: (state, action) => {
      state.isFetching = false;
      state.inventoryItems.push(action.payload);
    },
    addInventoryItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countInventoryItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countInventoryItemSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countInventoryItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getInventoryItemStart,
  getInventoryItemSuccess,
  getInventoryItemFailure,
  deleteInventoryItemStart,
  deleteInventoryItemSuccess,
  deleteInventoryItemFailure,
  updateInventoryItemStart,
  updateInventoryItemSuccess,
  updateInventoryItemFailure,
  addInventoryItemStart,
  addInventoryItemSuccess,
  addInventoryItemFailure,
  countInventoryItemStart,
  countInventoryItemSuccess,
  countInventoryItemFailure,
} = InventoryItemSlice.actions;

export default InventoryItemSlice.reducer;
