import { addSiteManagerItem, removeSiteManagerItem } from "./dispatchRedux";

export const setAddSiteManagerItem = async (dispatch, data) => {
  dispatch(addSiteManagerItem(data));
};

export const setremoveSiteManagerItem = async (dispatch) => {
  dispatch(removeSiteManagerItem());
};
