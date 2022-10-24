import { createSlice } from "@reduxjs/toolkit";

export const MaterialRequestSlice = createSlice({
  name: "materialRequest",
  initialState: {
    materialRequests: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getMaterialRequestStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMaterialRequestSuccess: (state, action) => {
      state.isFetching = false;
      state.materialRequests = action.payload;
    },
    getMaterialRequestFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteMaterialRequestStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMaterialRequestSuccess: (state, action) => {
      state.isFetching = false;
      state.materialRequests.splice(
        state.materialRequests.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteMaterialRequestFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateMaterialRequestStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMaterialRequestSuccess: (state, action) => {
      state.isFetching = false;
      state.materialRequests[
        state.materialRequests.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.materialRequests;
    },
    updateMaterialRequestFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addMaterialRequestStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMaterialRequestSuccess: (state, action) => {
      state.isFetching = false;
      state.materialRequests.push(action.payload);
    },
    addMaterialRequestFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countMaterialRequestStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countMaterialRequestSuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countMaterialRequestFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMaterialRequestStart,
  getMaterialRequestSuccess,
  getMaterialRequestFailure,
  deleteMaterialRequestStart,
  deleteMaterialRequestSuccess,
  deleteMaterialRequestFailure,
  updateMaterialRequestStart,
  updateMaterialRequestSuccess,
  updateMaterialRequestFailure,
  addMaterialRequestStart,
  addMaterialRequestSuccess,
  addMaterialRequestFailure,
  countMaterialRequestStart,
  countMaterialRequestSuccess,
  countMaterialRequestFailure,
} = MaterialRequestSlice.actions;

export default MaterialRequestSlice.reducer;
