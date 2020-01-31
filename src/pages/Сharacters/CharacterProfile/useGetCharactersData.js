import { useMemo } from "react";

import { useSelector } from "react-redux";
import { makeSelectCharacterById } from "../../../store/selectors";

export default function useGetCharacterProfile(id) {
  const characterByIdSelector = useMemo(() => makeSelectCharacterById(id), [
    id
  ]);

  const character = useSelector(characterByIdSelector);
  return useMemo(
    () => ({
      character
    }),
    [character]
  );
}
