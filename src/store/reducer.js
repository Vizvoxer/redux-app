import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import charactersReducer from "./characters/reducer";
import checkoutReducer from "./checkout/reducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  checkout: checkoutReducer,
  form: formReducer,
});

export default rootReducer;
