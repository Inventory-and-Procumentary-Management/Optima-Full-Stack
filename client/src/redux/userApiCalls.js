import { loginFailure, loginStart, loginSuccess, tokenSave } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user);
  try {
    const res = await publicRequest.post("/login", {"username":"Punsisi","password":1234});
    console.log(res);
    dispatch(tokenSave(res.data.access_token));
    try {
      const result = await userRequest.get(`/user/${user.username}`);
      dispatch(loginSuccess(result.data));
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
