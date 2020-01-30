import { useEffect, useState, useMemo } from "react";
import { getCharacters } from "../../api/characters";

function useGetCharactersData() {
  const [characters, setCharacters] = useState([]);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    getCharacters()
      .then(data => {
        if (!cancel) {
          setCharacters(data);
        }
      })
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });
    return function abortGetCharacters() {
      setCancel(true);
    };
  }, [cancel, setCancel]);
  return useMemo(
    () => ({
      characters
    }),
    [characters]
  );
}

export default useGetCharactersData;
