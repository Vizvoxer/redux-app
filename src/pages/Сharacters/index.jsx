import React from "react";
import useGetCharactersData from "./useGetCharactersData";
import CharacterItem from "../../components/CharacterItem";

import "./styles.css";

export default function Characters() {
  const { characters = [] } = useGetCharactersData();
  return characters.map(char => (
    <div className="characterContainer" key={char.url}>
      <CharacterItem name={char.name} url={char.url} />
    </div>
  ));
}
