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
    removeBreadcrumb: (state,action) => {
      state.breadcrumbs.splice(
        state.breadcrumbs.findIndex((item) => item.link === action.payload),
        1
      );
      // state.categories[
      //   state.categories.findIndex((item) => item._id === action.payload.id)
      // ] = action.payload.categories;
    },
    removeOneBreadcrumb: (state) => {
      state.breadcrumbs.pop();
    },
    removeAllBreadcrumb: (state,action) => {
      state.breadcrumbs = [];
      state.breadcrumbs.push(action.payload);
    },
  },
});

export const { addBreadcrumb, removeBreadcrumb, removeOneBreadcrumb, removeAllBreadcrumb } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
