const initialState = {
  authToken: null,
  userID: null,
  currentUser: null,
  userType: null,
  // userData: {},
  // anyData:[],
};

export default loginReducer = (state = initialState, action) => {
  // alert("Man Ava");
  switch (action.type) {
    case "LOGIN":
      return {
        ...state, //copy all previous states
        authToken: action.payload,
        // userType: action.userType,
      };
    case "LOGOUT":
      return {
        authToken: null,
        userID: null,
        currentUser: null,
      };
    case "USERDETAIL":
      return {
        ...state,
        currentUser: action.payload,
        userType:action.userType,
        userID: action.userID,
        // userType: action.payload.roles.name,
      };
    default:
      return state;
  }
};
