import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    sites: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSiteStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSiteSuccess: (state, action) => {
      state.isFetching = false;
      state.sites = action.payload;
    },
    getSiteFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSiteStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSiteSuccess: (state, action) => {
      state.isFetching = false;
      state.sites.splice(
        state.sites.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSiteFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSiteStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSiteSuccess: (state, action) => {
      state.isFetching = false;
      state.sites[
        state.sites.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.site;
    },
    updateSiteFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addSiteStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSiteSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addSiteFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSiteStart,
  getSiteSuccess,
  getSiteFailure,
  deleteSiteStart,
  deleteSiteSuccess,
  deleteSiteFailure,
  updateSiteStart,
  updateSiteSuccess,
  updateSiteFailure,
  addSiteStart,
  addSiteSuccess,
  addSiteFailure,
} = siteSlice.actions;

export default siteSlice.reducer;
