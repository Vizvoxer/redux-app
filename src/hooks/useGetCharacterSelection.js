import { useMemo } from "react";
import { makeSelectIsItemPicked } from "../store/selectors";
import { useSelector } from "react-redux";

export default function useGetCharacterSelection(id) {
  const isCharactersPickedSelector = useMemo(() => makeSelectIsItemPicked(id), [
    id
  ]);
  return useSelector(isCharactersPickedSelector);
}
