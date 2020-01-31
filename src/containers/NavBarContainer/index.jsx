import React from "react";
import { connect } from "react-redux";

import MainMenu from "../../components/MainMenu";
import SelectedCounter from "../../components/SelectedCounter";

import "./styles.css";
import { selectPickedCharactersCount } from "../../store/selectors";
import NavBar from "../../components/NavBar";

function NavBarContainer({ count }) {
  return (
    <NavBar>
      <MainMenu />
      <div className="counterContainer">
        <SelectedCounter count={count} />
      </div>
    </NavBar>
  );
}

const mapStateToProps = state => ({
  count: selectPickedCharactersCount(state)
});

const enhance = connect(mapStateToProps);

export default enhance(NavBarContainer);
