import { loginFailure, loginStart, loginSuccess, tokenSave } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  // const userData = JSON.stringify(user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    console.log(res);
    await dispatch(tokenSave(res.data));
    try {
      const result = await publicRequest.get(`/user/${user.username}`,{
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        }
      });
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
