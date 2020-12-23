import { combineReducers } from "redux";

// import CounterReducer from "./Counter";
import RecipeReducer from "./Recipes";

const reducers = combineReducers({
  recipes: RecipeReducer,
  auth: (prevState = { isLogin: false }, action) => {
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
  },
});

export default reducers;
