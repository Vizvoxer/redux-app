import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../api/characters";
import { getCharactersSuccess } from "../store/characters/actions";
import { normalize } from "../utils/normalize";
import { selectCharactersList } from "../store/selectors";

function useGetCharactersData() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersList);

  useEffect(() => {
    if (!characters.length) {
      getCharacters()
        .then(data => {
          const dataToSave = normalize(data);
          dispatch(getCharactersSuccess(dataToSave));
        })
        .catch(error => {
          console.log("Error obtaining characters:", error);
        });
    }
  }, [dispatch, characters]);
  return useMemo(
    () => ({
      characters
    }),
    [characters]
  );
}

export default useGetCharactersData;
