import { useEffect, useState, useMemo } from "react";
import { getCharacterProfile } from "../../../api/characters";

export default function useGetCharacterProfile(id) {
  const [character, setCharacter] = useState({});
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    getCharacterProfile(id)
      .then(data => {
        if (!cancel) {
          setCharacter(data);
        }
      })
      .catch(error => {
        console.log("Error obtaining character:", error);
      });
    return function abortGetCharacterProfile() {
      setCancel(true);
    };
  }, [cancel, id, setCancel]);
  return useMemo(
    () => ({
      character
    }),
    [character]
  );
}
