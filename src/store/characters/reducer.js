import { GET_CHARACTERS_SUCCESS } from "./actionTypes";

export const initialState = {
  byId: {},
  allIds: [],
  selectedIds: []
};

function saveCharacters(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      ...action.byId
    },
    allIds: [...state.allIds, ...action.allIds]
  };
}

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return saveCharacters(state, action);
    default:
      return state;
  }
}
