import get from "lodash.get";

export default function generateCharacterNameFromAlias(character) {
  if (get(character, "name").length) {
    return character;
  }
  const { aliases = [] } = character;
  const name = aliases.join(" ");
  return {
    ...character,
    name
  };
}
