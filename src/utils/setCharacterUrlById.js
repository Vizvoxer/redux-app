import getUrlId from "./getUrlId";
import { routes } from "../constants/routes";

export default function setCharacterUrlById(entity) {
  const id = getUrlId(entity.url);
  const { characters } = routes;
  return {
    ...entity,
    url: characters.getCharacterUrl(id),
    id
  };
}
