import React from "react";
import { connect } from "react-redux";

import "../../containers/NavBarContainer/styles.css";
import { toggleCharacterSelect } from "../../store/checkout/actions";
import CharacterItemContainer from "../../containers/CharacterItemContainer";

function Characters({ characters, toggleCharacter }) {
  return characters.map(character => (
    <div className="characterContainer" key={character.url}>
      <CharacterItemContainer
        character={character}
        toggleCharacter={toggleCharacter}
      />
    </div>
  ));
}

const mapDispatchToProps = {
  toggleCharacter: toggleCharacterSelect
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(Characters);
