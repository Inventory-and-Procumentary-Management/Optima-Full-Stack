import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    count: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    getCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.splice(
        state.categories.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories[
        state.categories.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.categories;
    },
    updateCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.push(action.payload);
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //COUNT
    countCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    countCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.count = action.payload;
    },
    countCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  countCategoryStart,
  countCategorySuccess,
  countCategoryFailure,
} = CategorySlice.actions;

export default CategorySlice.reducer;
