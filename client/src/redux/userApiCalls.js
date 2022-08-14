import { loginFailure, loginStart, loginSuccess, tokenSave } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  // const userData = JSON.stringify(user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    console.log(res);
    dispatch(tokenSave(res.data));
    try {
      const result = await userRequest.get(`/user/${user.username}`);
      console.log(result);
      dispatch(loginSuccess(result.data));
      window.location.href = "http://localhost:3000/";
    } catch (error) {}
  } catch (err) {
    dispatch(loginFailure());
  }
};

// export const getProducts = async (dispatch) => {
//   dispatch(getProductStart());
//   try {
//     const res = await publicRequest.get("/products");
//     dispatch(getProductSuccess(res.data));
//   } catch (err) {
//     dispatch(getProductFailure());
//   }
// };
