import { publicRequest, userRequest } from "../requestMethods";
import {
  getInventoryStart,
  getInventorySuccess,
  getInventoryFailure,
  deleteInventoryStart,
  deleteInventorySuccess,
  deleteInventoryFailure,
  updateInventoryStart,
  updateInventorySuccess,
  updateInventoryFailure,
  addInventoryStart,
  addInventorySuccess,
  addInventoryFailure,
  countInventoryStart,
  countInventorySuccess,
  countInventoryFailure,
} from "./inventoryRedux";

export const getInventory = async (dispatch) => {
  dispatch(getInventoryStart());
  try {
    const res = await userRequest.get("/inventory/");
    dispatch(getInventorySuccess(res.data));
  } catch (err) {
    dispatch(getInventoryFailure());
  }
};

export const deleteInventory = async (id, dispatch) => {
  dispatch(deleteInventoryStart());
  try {
    const res = await userRequest.delete(`/inventory/delete/${id}`);
    dispatch(deleteInventorySuccess(id));
  } catch (err) {
    dispatch(deleteInventoryFailure());
  }
};

export const updateInventory = async (id, inventory, dispatch) => {
  dispatch(updateInventoryStart());
  try {
    // update
    const res = await userRequest.put(`/inventory/update/${id}`,inventory);
    dispatch(updateInventorySuccess({ id, inventory }));
    return 1;
  } catch (err) {
    dispatch(updateInventoryFailure());
    return 0;
  }
};
export const addInventory = async (inventory, dispatch) => {
  dispatch(addInventoryStart());
  try {
    const res = await userRequest.post(`/inventory/save`, inventory);
    dispatch(addInventorySuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addInventoryFailure());
    return 0;
  }
};
export const countInventory = async (dispatch) => {
  dispatch(countInventoryStart());
  try {
    const res = await userRequest.get(`/inventory/count`);
    console.log(res);
    dispatch(countInventorySuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countInventoryFailure());
    return 0;
  }
};