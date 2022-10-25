import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  countProductStart,
  countProductSuccess,
  countProductFailure
} from "./productRedux";

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/inventoryItem/?field=createDate");
    dispatch(getProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getProductFailure());
    return 0;
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/inventoryItem/delete/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/inventoryItem/update/${id}`,product);
    dispatch(updateProductSuccess({ id, product }));
    return 1;
  } catch (err) {
    dispatch(updateProductFailure());
    return 0;
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/inventoryItem/save`, product);
    dispatch(addProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addProductFailure());
    return 0;
  }
};
export const countProduct = async (dispatch) => {
  dispatch(countProductStart());
  try {
    const res = await userRequest.get(`/inventoryItem/count`);
    console.log(res);
    dispatch(countProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countProductFailure());
    return 0;
  }
};