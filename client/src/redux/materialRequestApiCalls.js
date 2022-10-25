import { publicRequest, userRequest } from "../requestMethods";
import {
  getMaterialRequestStart,
  getMaterialRequestSuccess,
  getMaterialRequestFailure,
  deleteMaterialRequestStart,
  deleteMaterialRequestSuccess,
  deleteMaterialRequestFailure,
  updateMaterialRequestStart,
  updateMaterialRequestSuccess,
  updateMaterialRequestFailure,
  addMaterialRequestStart,
  addMaterialRequestSuccess,
  addMaterialRequestFailure,
  countMaterialRequestStart,
  countMaterialRequestSuccess,
  countMaterialRequestFailure,
} from "./materialRequestRedux";

export const getMaterialRequest = async (dispatch) => {
  dispatch(getMaterialRequestStart());
  try {
    const res = await userRequest.get("/materialRequest/?field=createDate");
    dispatch(getMaterialRequestSuccess(res.data));
  } catch (err) {
    dispatch(getMaterialRequestFailure());
  }
};

export const deleteMaterialRequest = async (id, dispatch) => {
  dispatch(deleteMaterialRequestStart());
  try {
    const res = await userRequest.delete(`/materialRequest/delete/${id}`);
    dispatch(deleteMaterialRequestSuccess(id));
  } catch (err) {
    dispatch(deleteMaterialRequestFailure());
  }
};

export const updateMaterialRequest = async (id, materialRequest, dispatch) => {
  dispatch(updateMaterialRequestStart());
  try {
    // update
    const res = await userRequest.put(`/materialRequest/update/${id}`,materialRequest);
    dispatch(updateMaterialRequestSuccess({ id, materialRequest }));
    return 1;
  } catch (err) {
    dispatch(updateMaterialRequestFailure());
    return 0;
  }
};
export const addMaterialRequest = async (materialRequest, dispatch) => {
  dispatch(addMaterialRequestStart());
  try {
    const res = await userRequest.post(`/materialRequest/save`, materialRequest);
    dispatch(addMaterialRequestSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(addMaterialRequestFailure());
    return 0;
  }
};
export const countMaterialRequest = async (dispatch) => {
  dispatch(countMaterialRequestStart());
  try {
    const res = await userRequest.get(`/materialRequest/count`);
    console.log(res);
    dispatch(countMaterialRequestSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(countMaterialRequestFailure());
    return 0;
  }
};