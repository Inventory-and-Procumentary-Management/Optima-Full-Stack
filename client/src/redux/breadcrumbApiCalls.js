import { addBreadcrumb, removeBreadcrumb, removeOneBreadcrumb, removeAllBreadcrumb } from "./breadcrumbRedux";

export const getBreadcrumb = async (dispatch, data) => {
  dispatch(addBreadcrumb(data));
};

export const getRemoveBreadcrumb = async (dispatch,data) => {
  dispatch(removeBreadcrumb(data));
};

export const getRemoveOneBreadcrumb = async (dispatch) => {
  dispatch(removeOneBreadcrumb());
};

export const getRemoveAllBreadcrumb = async (dispatch,data) => {
  dispatch(removeAllBreadcrumb(data));
};
