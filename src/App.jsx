import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Characters from "./pages/Сharacters";
import { routes } from "./constants/routes";
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";
import CharacterProfile from "./pages/Сharacters/CharacterProfile";
import SelectedCounter from "./components/SelectedCounter";

function App() {
  return (
    <Fragment>
      <NavBar>
        <MainMenu />
        <div className="counterContainer">
          <SelectedCounter />
        </div>
      </NavBar>
      <Switch>
        <Redirect exact from="/" to={routes.characters.index} />
        <Route path={routes.characters.index} exact component={Characters} />
        <Route
          path={routes.characters.characterProfile}
          exact
          component={CharacterProfile}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
