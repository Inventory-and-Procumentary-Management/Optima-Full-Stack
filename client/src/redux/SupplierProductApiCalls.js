import { publicRequest, userRequest } from "../requestMethods";
import {
    getSupplierProductStart,
    getSupplierProductSuccess,
    getSupplierProductFailure,
    deleteSupplierProductStart,
    deleteSupplierProductSuccess,
    deleteSupplierProductFailure,
    updateSupplierProductStart,
    updateSupplierProductSuccess,
    updateSupplierProductFailure,
    addSupplierProductStart,
    addSupplierProductSuccess,
    addSupplierProductFailure,
    countSupplierProductStart,
    countSupplierProductSuccess,
    countSupplierProductFailure,
} from "./SupplierProductRedux";

export const getSupplierProducts = async (dispatch) => {
  dispatch(getSupplierProductStart());
  try {
    const res = await userRequest.get("supplierItem/");
   // console.log(res.data);
    dispatch(getSupplierProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getSupplierProductFailure());
    return 0;
  }
};

export const deleteSupplierProduct = async (id, dispatch) => {
  dispatch(deleteSupplierProductStart());
  try {
    const res = await userRequest.delete(`/supplierItem/delete/${id}`);
    dispatch(deleteSupplierProductSuccess(id));
  } catch (err) {
    dispatch(deleteSupplierProductFailure());
  }
};

export const updateSupplierProduct = async (id, product, dispatch) => {
  dispatch(updateSupplierProductStart());
  try {
    // update
    const res = await userRequest.put(`supplierItem/update/${id}`,product);
    dispatch(updateSupplierProductSuccess({ id, product }));
    return 1;
  } catch (err) {
    dispatch(updateSupplierProductFailure());
    return 0;
  }
};
export const addSupplierProduct = async (product, dispatch) => {
  dispatch(addSupplierProductStart());
  try {
  
      const res = await userRequest.post(`/supplierItem/save`, product);
    dispatch(addSupplierProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addSupplierProductFailure());
    return 0;
  }
};
export const countSupplierProduct = async (dispatch) => {
  dispatch(countSupplierProductStart());
  try {
    const res = await userRequest.get(`/supplierItem/count`);
    console.log(res);
    dispatch(countSupplierProductSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countSupplierProductFailure());
    return 0;
  }
};