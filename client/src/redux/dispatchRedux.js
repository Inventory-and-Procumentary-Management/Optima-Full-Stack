import { createSlice } from "@reduxjs/toolkit";

export const siteManagerItemSlice = createSlice({
  name: "siteManagerItem",
  initialState: {
    siteManagerItems: [],
  },
  reducers: {
    addSiteManagerItem: (state, action) => {
    //   state.siteManagerItems.push(action.payload);
      state.siteManagerItems = action.payload;
    },
    removeSiteManagerItem: (state) => {
      state.siteManagerItems.pop();
    },
  },
});

export const { addSiteManagerItem, removeSiteManagerItem } = siteManagerItemSlice.actions;

export default siteManagerItemSlice.reducer;
