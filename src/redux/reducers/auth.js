const authReducer = (prevState = { isLogin: false }, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...prevState,
        isLogin: true,
      };
    case "Logout":
      return {
        ...prevState,
        isLogin: false,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
