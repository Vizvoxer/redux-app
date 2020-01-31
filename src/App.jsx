import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Characters from "./pages/Сharacters";
import { routes } from "./constants/routes";
import CharacterProfile from "./pages/Сharacters/CharacterProfile";
import NavBarContainer from "./containers/NavBarContainer";
import useGetCharactersData from "./hooks/useGetCharactersData";

function App() {
  const { characters } = useGetCharactersData();
  return (
    <Fragment>
      <NavBarContainer />
      <Switch>
        <Redirect exact from="/" to={routes.characters.index} />
        <Route
          path={routes.characters.index}
          exact
          render={() => <Characters characters={characters} />}
        />
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
