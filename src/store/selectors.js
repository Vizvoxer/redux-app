import { createSelector } from "reselect";

export const selectCharacters = state => state.characters;
export const selectCheckout = state => state.checkout;

export const selectToysToBuy = createSelector(
  selectCheckout,
  state => state.toysToBuy
);

export const selectCharactersEntities = createSelector(
  selectCharacters,
  state => state.byId
);
export const selectCharactersIds = createSelector(
  selectCharacters,
  state => state.allIds
);

export const selectCharactersList = createSelector(
  [selectCharactersEntities, selectCharactersIds],
  (characters, allIds = []) => allIds.map(id => characters[id])
);

export const makeSelectCharacterById = id =>
  createSelector(selectCharactersEntities, byId => byId[id]);

export const selectPickedCharactersCount = createSelector(
  selectToysToBuy,
  (toysToBuy = []) => toysToBuy.length
);

export const makeSelectIsItemPicked = id =>
  createSelector(
    selectToysToBuy,
    toyIds => !!toyIds.find(toyId => toyId === id)
  );
