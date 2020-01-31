import { GET_CHARACTERS_SUCCESS } from "./actionTypes";

export function getCharactersSuccess(data) {
  return {
    type: GET_CHARACTERS_SUCCESS,
    ...data
  };
}
