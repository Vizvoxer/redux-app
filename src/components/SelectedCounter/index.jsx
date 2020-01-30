import React from "react";
import PropTypes from "prop-types";

export default function SelectedCounter({ count }) {
  return !!count && <div>Selected {count} items</div>;
}

SelectedCounter.propTypes = {
  count: PropTypes.number
};

SelectedCounter.defaultProps = {
  count: 0
};
