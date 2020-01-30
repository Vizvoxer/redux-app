import React from "react";
import { useParams } from "react-router-dom";

import useGetCharacterProfile from "./useGetCharactersData";

export default function CharacterProfile() {
  const { characterId } = useParams();
  const { character } = useGetCharacterProfile(characterId);
  return (
    <div>
      <h1>Profile of: {character.name}</h1>
      <ul>
        <li>Gender: {character.gender}</li>
        <li>Culture: {character.culture}</li>
      </ul>
    </div>
  );
}
