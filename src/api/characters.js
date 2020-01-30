import compose from "../utils/compose";
import generateCharacterNameFromAlias from "../utils/generateCharacterNameFromAlias";
import setCharacterUrlById from "../utils/setCharacterUrlById";

const adaptCharacter = compose(
  generateCharacterNameFromAlias,
  setCharacterUrlById
);

export function getCharacters(options) {
  return fetch("https://anapioficeandfire.com/api/characters/", options)
    .then(result => result.json())
    .then(results => results.map(adaptCharacter))
    .catch(error => {
      console.log("Fetch of characters failed:", error);
    });
}

export function getCharacterProfile(id, options) {
  return fetch(`https://anapioficeandfire.com/api/characters/${id}`, options)
    .then(result => result.json())
    .then(profile => adaptCharacter(profile))
    .catch(error => {
      console.log("Fetch of characters failed:", error);
    });
}
