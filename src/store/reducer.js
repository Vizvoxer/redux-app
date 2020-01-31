import { combineReducers } from "redux";
import charactersReducer from "./characters/reducer";
import checkoutReducer from "./checkout/reducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  checkout: checkoutReducer
});

export default rootReducer;
