import { publicRequest, userRequest } from "../requestMethods";
import {
    getSupplierOrderStart,
    getSupplierOrderSuccess,
    getSupplierOrderFailure,
    deleteSupplierOrderStart,
    deleteSupplierOrderSuccess,
    deleteSupplierOrderFailure,
    updateSupplierOrderStart,
    updateSupplierOrderSuccess,
    updateSupplierOrderFailure,
    addSupplierOrderStart,
    addSupplierOrderSuccess,
    addSupplierOrderFailure,
    countSupplierOrderStart,
    countSupplierOrderSuccess,
    countSupplierOrderFailure,
} from "./SupplierOrdersRedux";

export const getSupplierOrders = async (dispatch) => {
  dispatch(getSupplierOrderStart());
  try {
    const res = await userRequest.get("purchaseOrder/");
   // console.log(res.data);
    dispatch(getSupplierOrderSuccess(res.data));
  } catch (err) {
    dispatch(getSupplierOrderFailure());
  }
};

export const deleteSupplierOrders = async (id, dispatch) => {
  dispatch(deleteSupplierOrderStart());
  try {
    const res = await userRequest.delete(`/purchaseOrder/delete/${id}`);
    dispatch(deleteSupplierOrderSuccess(id));
  } catch (err) {
    dispatch(deleteSupplierOrderFailure());
  }
};

export const updateSupplierOrders = async (id, product, dispatch) => {
  dispatch(updateSupplierOrderStart());
  try {
    // update
    const res = await userRequest.put(`purchaseOrder/update/${id}`,product);
    dispatch(updateSupplierOrderSuccess({ id, product }));
    return 1;
  } catch (err) {
    dispatch(updateSupplierOrderFailure());
    return 0;
  }
};
export const addSupplierOrders = async (product, dispatch) => {
  dispatch(addSupplierOrderStart());
  try {
    const res = await userRequest.post(`/purchaseOrder/save`, product);
    dispatch(addSupplierOrderSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addSupplierOrderFailure());
    return 0;
  }
};
export const countSupplierOrders = async (dispatch) => {
  dispatch(countSupplierOrderStart());
  try {
    const res = await userRequest.get(`/purchaseOrder/count`);
    console.log(res);
    dispatch(countSupplierOrderSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countSupplierOrderFailure());
    return 0;
  }
};