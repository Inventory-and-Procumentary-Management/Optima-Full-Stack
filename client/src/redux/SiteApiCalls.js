import { publicRequest, userRequest } from "../requestMethods";
import {
  getSiteFailure,
  getSiteStart,
  getSiteSuccess,
  deleteSiteFailure,
  deleteSiteStart,
  deleteSiteSuccess,
  updateSiteFailure,
  updateSiteStart,
  updateSiteSuccess,
  addSiteFailure,
  addSiteStart,
  addSiteSuccess,
} from "./SiteRedux";

export const getSite = async (dispatch) => {
    dispatch(getSiteStart());
  try {
    const res = await userRequest.get("/site/");
    console.log(res.data);
    dispatch(getSiteSuccess(res.data));
  } catch (err) {
    dispatch(getSiteFailure());
  }
};

export const deleteSite = async (id, dispatch) => {
  dispatch(deleteSiteStart());
  try {
    const res = await userRequest.delete(`/site/delete/${id}`);
    dispatch(deleteSiteSuccess(id));
  } catch (err) {
    dispatch(deleteSiteFailure());
  }
};

export const updateSite = async (id, product, dispatch) => {
  dispatch(updateSiteStart());
  try {
    // update
    const res = await userRequest.put(`/site/update/${id}`,product);
    dispatch(updateSiteSuccess({ id, product }));
  } catch (err) {
    dispatch(updateSiteFailure());
  }
};
export const addSite = async (product, dispatch) => {
  dispatch(addSiteStart());
  try {
    const res = await userRequest.post(`/site/save`, product);
    dispatch(addSiteSuccess(res.data));
  } catch (err) {
    dispatch(addSiteFailure());
  }
};
