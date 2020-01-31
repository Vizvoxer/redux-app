import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

export default function CharacterItem({ name, url, selected, onClick }) {
  const characterClassNames = classNames("characterItem", {
    characterItemSelected: selected
  });
  return (
    <div className={characterClassNames} onClick={onClick}>
      <span>
        {name}. Details are <Link to={url}>here</Link>
      </span>
    </div>
  );
}

CharacterItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  selected: PropTypes.bool
};

CharacterItem.defaultProps = {
  name: "",
  url: "",
  selected: false
};
