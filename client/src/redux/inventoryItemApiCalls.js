import { publicRequest, userRequest } from "../requestMethods";
import {
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
} from "./inventoryItemRedux";

export const getInventoryItems = async (dispatch) => {
  dispatch(getInventoryItemStart());
  try {
    const res = await userRequest.get("/inventoryItem/?field=createDate");
    dispatch(getInventoryItemSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getInventoryItemFailure());
    return 0;
  }
};

export const deleteInventoryItem = async (id, dispatch) => {
  dispatch(deleteInventoryItemStart());
  try {
    const res = await userRequest.delete(`/inventoryItem/delete/${id}`);
    dispatch(deleteInventoryItemSuccess(id));
    return 1;
  } catch (err) {
    dispatch(deleteInventoryItemFailure());
    return 0;
  }
};

export const updateInventoryItem = async (id, inventoryItem, dispatch) => {
  dispatch(updateInventoryItemStart());
  try {
    // update
    const res = await userRequest.put(`/inventoryItem/update/${id}`,inventoryItem);
    dispatch(updateInventoryItemSuccess({ id, inventoryItem }));
    return 1;
  } catch (err) {
    dispatch(updateInventoryItemFailure());
    return 0;
  }
};
export const addInventoryItem = async (inventoryItem, dispatch) => {
  dispatch(addInventoryItemStart());
  try {
    const res = await userRequest.post(`/inventoryItem/save`, inventoryItem);
    dispatch(addInventoryItemSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addInventoryItemFailure());
    return 0;
  }
};
export const countInventoryItem = async (dispatch) => {
  dispatch(countInventoryItemStart());
  try {
    const res = await userRequest.get(`/inventoryItem/count`);
    console.log(res);
    dispatch(countInventoryItemSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countInventoryItemFailure());
    return 0;
  }
};