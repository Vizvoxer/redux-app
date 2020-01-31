import { TOGGLE_CHARACTER_SELECT } from "./actionTypes";

export function toggleCharacterSelect(id) {
  return {
    type: TOGGLE_CHARACTER_SELECT,
    id
  };
}
