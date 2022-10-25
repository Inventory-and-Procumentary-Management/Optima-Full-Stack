import { publicRequest, userRequest } from "../requestMethods";
import {
    getSupplierStart,
    getSupplierSuccess,
    getSupplierFailure,
    deleteSupplierStart,
    deleteSupplierSuccess,
    deleteSupplierFailure,
    updateSupplierStart,
    updateSupplierSuccess,
    updateSupplierFailure,
    addSupplierStart,
    addSupplierSuccess,
    addSupplierFailure,
    countSupplierStart,
    countSupplierSuccess,
    countSupplierFailure,
} from "./supplierRedux";

export const getSuppliers = async (dispatch) => {
  dispatch(getSupplierStart());
  try {
    const res = await userRequest.get("/supplier/");
   // console.log(res.data);
    dispatch(getSupplierSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getSupplierFailure());
    return 0;
  }
};

export const deleteSupplier = async (id, dispatch) => {
  dispatch(deleteSupplierStart());
  try {
    const res = await userRequest.delete(`/supplier/delete/${id}`);
    dispatch(deleteSupplierSuccess(id));
  } catch (err) {
    dispatch(deleteSupplierFailure());
  }
};

export const updateSupplier = async (id, product, dispatch) => {
  dispatch(updateSupplierStart());
  try {
    // update
    const res = await userRequest.put(`/supplier/update/${id}`,product);
    dispatch(updateSupplierSuccess({ id, product }));
    return 1;
  } catch (err) {
    dispatch(updateSupplierFailure());
    return 0;
  }
};
export const addSupplier = async (product, dispatch) => {
  dispatch(addSupplierStart());
  try {
    const res = await userRequest.post(`/supplier/save`, product);
    dispatch(addSupplierSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addSupplierFailure());
    return 0;
  }
};
export const countSupplier = async (dispatch) => {
  dispatch(countSupplierStart());
  try {
    const res = await userRequest.get(`/supplier/count`);
    console.log(res);
    dispatch(countSupplierSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countSupplierFailure());
    return 0;
  }
};