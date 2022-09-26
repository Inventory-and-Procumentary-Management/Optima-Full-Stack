import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: {
    breadcrumbs: [],
  },
  reducers: {
    addBreadcrumb: (state, action) => {
      state.breadcrumbs.push(action.payload);
    },
    removeBreadcrumb: (state) => {
      state.breadcrumbs.pop();
    },
  },
});

export const { addBreadcrumb, removeBreadcrumb } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
