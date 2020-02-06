import React from "react";
import { useParams } from "react-router-dom";

import useGetCharacterProfile from "./useGetCharactersData";
import useGetCharacterSelection from "../../../hooks/useGetCharacterSelection";
import CharacterDetails from "../../../components/CharacterDetails";
import useToggle from "../../../hooks/useToggle";
import CharacterForm from "../../../components/CharacterForm";

export default function CharacterProfile() {
  const { characterId } = useParams();
  const { character = {} } = useGetCharacterProfile(characterId);
  const selected = useGetCharacterSelection(characterId);
  const [isEditMode, toggleEditMode] = useToggle(false);
  const pageContent = isEditMode ? <CharacterForm/> : <CharacterDetails character={character} selected={selected} />;
  return (
      <div>
        <button onClick={toggleEditMode}> Toggle Edit mode</button>
        {pageContent}
      </div>
  )
}
