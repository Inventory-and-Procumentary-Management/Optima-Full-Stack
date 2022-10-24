import { publicRequest, userRequest } from "../requestMethods";
import {
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
} from "./categoryRedux";

export const getCategory = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await userRequest.get("/category/?field=createDate");
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/category/delete/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
};

export const updateCategory = async (id, category, dispatch) => {
  dispatch(updateCategoryStart());
  try {
    // update
    const res = await userRequest.put(`/category/update/${id}`,category);
    dispatch(updateCategorySuccess({ id, category }));
    return 1;
  } catch (err) {
    dispatch(updateCategoryFailure());
    return 0;
  }
};
export const addCategory = async (category, dispatch) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/category/save`, category);
    dispatch(addCategorySuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addCategoryFailure());
    return 0;
  }
};
export const countCategory = async (dispatch) => {
  dispatch(countCategoryStart());
  try {
    const res = await userRequest.get(`/category/count`);
    console.log(res);
    dispatch(countCategorySuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countCategoryFailure());
    return 0;
  }
};