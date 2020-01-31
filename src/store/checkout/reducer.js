import { TOGGLE_CHARACTER_SELECT } from "./actionTypes";

const initialState = {
  toysToBuy: []
};

function toggleSelected(state, action) {
  const targetItem = state.find(id => id === action.id);
  if (targetItem) {
    return state.filter(el => el !== action.id);
  }
  return [...state, action.id];
}
export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CHARACTER_SELECT:
      return {
        ...state,
        toysToBuy: toggleSelected(state.toysToBuy, action)
      };
    default:
      return state;
  }
}
