import React from "react";
import { useParams } from "react-router-dom";

import useGetCharacterProfile from "./useGetCharactersData";
import useGetCharacterSelection from "../../../hooks/useGetCharacterSelection";

export default function CharacterProfile() {
  const { characterId } = useParams();
  const { character = {} } = useGetCharacterProfile(characterId);
  const selected = useGetCharacterSelection(characterId);
  return (
    <div>
      <h1>Profile of: {character.name}</h1>
      {!!selected && <h2>This character is selected</h2>}
      <ul>
        <li>Gender: {character.gender}</li>
        <li>Culture: {character.culture}</li>
      </ul>
    </div>
  );
}
