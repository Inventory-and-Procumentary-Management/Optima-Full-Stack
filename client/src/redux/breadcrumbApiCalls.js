import { addBreadcrumb, removeBreadcrumb } from "./breadcrumbRedux";

export const getBreadcrumb = async (dispatch, data) => {
  dispatch(addBreadcrumb(data));
};

export const getRemoveBreadcrumb = async (dispatch) => {
  dispatch(removeBreadcrumb());
};
