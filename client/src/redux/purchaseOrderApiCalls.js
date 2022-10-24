import { publicRequest, userRequest } from "../requestMethods";
import {
  getPurchaseOrderStart,
  getPurchaseOrderSuccess,
  getPurchaseOrderFailure,
  deletePurchaseOrderStart,
  deletePurchaseOrderSuccess,
  deletePurchaseOrderFailure,
  updatePurchaseOrderStart,
  updatePurchaseOrderSuccess,
  updatePurchaseOrderFailure,
  addPurchaseOrderStart,
  addPurchaseOrderSuccess,
  addPurchaseOrderFailure,
  countPurchaseOrderStart,
  countPurchaseOrderSuccess,
  countPurchaseOrderFailure,
} from "./purchaseOrderRedux";

export const getPurchaseOrders = async (dispatch) => {
  dispatch(getPurchaseOrderStart());
  try {
    const res = await userRequest.get("/purchaseOrder/");
    dispatch(getPurchaseOrderSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getPurchaseOrderFailure());
    return 0;
  }
};

export const deletePurchaseOrder = async (id, dispatch) => {
  dispatch(deletePurchaseOrderStart());
  try {
    const res = await userRequest.delete(`/purchaseOrder/delete/${id}`);
    dispatch(deletePurchaseOrderSuccess(id));
    return 1;
  } catch (err) {
    dispatch(deletePurchaseOrderFailure());
    return 0;
  }
};

export const updatePurchaseOrder = async (id, PurchaseOrder, dispatch) => {
  dispatch(updatePurchaseOrderStart());
  try {
    // update
    const res = await userRequest.put(`/purchaseOrder/update/${id}`,PurchaseOrder);
    dispatch(updatePurchaseOrderSuccess({ id, PurchaseOrder }));
    return 1;
  } catch (err) {
    dispatch(updatePurchaseOrderFailure());
    return 0;
  }
};
export const addPurchaseOrder = async (PurchaseOrder, dispatch) => {
  dispatch(addPurchaseOrderStart());
  try {
    const res = await userRequest.post(`/purchaseOrder/save`, PurchaseOrder);
    dispatch(addPurchaseOrderSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addPurchaseOrderFailure());
    return 0;
  }
};
export const countPurchaseOrder = async (dispatch) => {
  dispatch(countPurchaseOrderStart());
  try {
    const res = await userRequest.get(`/purchaseOrder/count`);
    console.log(res);
    dispatch(countPurchaseOrderSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countPurchaseOrderFailure());
    return 0;
  }
};