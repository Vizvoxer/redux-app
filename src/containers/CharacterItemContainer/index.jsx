import React, { useCallback } from "react";
import PropTypes from "prop-types";

import CharacterItem from "../../components/CharacterItem";

import "./styles.css";
import useGetCharacterSelection from "../../hooks/useGetCharacterSelection";

export default function CharacterItemContainer({ character, toggleCharacter }) {
  const selected = useGetCharacterSelection(character.id);

  const handleCharacterClick = useCallback(() => {
    toggleCharacter(character.id);
  }, [character.id, toggleCharacter]);

  const preventPropagation = useCallback(e => {
    e.stopPropagation();
  }, []);

  return (
    <div className="characterContainer" onClick={preventPropagation}>
      <CharacterItem
        name={character.name}
        url={character.url}
        onClick={handleCharacterClick}
        selected={selected}
      />
    </div>
  );
}

CharacterItemContainer.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  toggleCharacter: PropTypes.func.isRequired
};
