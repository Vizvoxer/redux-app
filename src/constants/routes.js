export const routes = {
  characters: {
    index: "/characters",
    characterProfile: "/characters/:characterId",
    getCharacterUrl(id) {
      return `${this.index}/${id}`;
    }
  }
};
