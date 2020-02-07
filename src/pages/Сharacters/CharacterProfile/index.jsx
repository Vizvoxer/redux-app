import React from "react";
import { useParams } from "react-router-dom";

import useGetCharacterProfile from "./useGetCharactersData";
import useGetCharacterSelection from "../../../hooks/useGetCharacterSelection";
import CharacterDetails from "../../../components/CharacterDetails";
import useToggle from "../../../hooks/useToggle";
import CharacterFormContainer from "../../../containers/CharacterFormContainer";
import useCharacterFormInitialValues from "./useCharacterFormInitialValues";

const onSubmit = values => {
    console.log(values);
};


export default function CharacterProfile() {
  const { characterId } = useParams();
  const { character = {} } = useGetCharacterProfile(characterId);
  const selected = useGetCharacterSelection(characterId);
  const [isEditMode, toggleEditMode] = useToggle(false);
  const initialValues = useCharacterFormInitialValues(character);
  const formContainer = <CharacterFormContainer initialValues={initialValues} onSubmit={onSubmit}  />;
  const detailsContainer = <CharacterDetails character={character} selected={selected} />;
  const pageContent = isEditMode ? formContainer : detailsContainer;

  return (
      <div>
        <button onClick={toggleEditMode}> Toggle Edit mode</button>
        {pageContent}
      </div>
  )
}
