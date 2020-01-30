import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

export default function CharacterItem({ name, url }) {
  return (
    <div className="characterItem">
      {name}. Details are <Link to={url}>here</Link>
    </div>
  );
}

CharacterItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

CharacterItem.defaultProps = {
  name: "",
  url: ""
};
