import axios from "react-native-axios";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.1.4:8080/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JlMjE5NzQ3YTI4NWM0ZTJmMzFiYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc0NDY5OCwiZXhwIjoxNjU4MDAzODk4fQ.7daxD3CSubuHEJPl-IMtp_lguXimAIULd46BbJ-I8PQ";

// const user = useSelector((state) => state.user.token);
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).token;
const TOKEN = 
  AsyncStorage.getItem("token")
;
console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  "Content-Type": "application/json",
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${TOKEN}`,
  },
});
