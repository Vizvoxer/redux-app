import { useMemo } from 'react';

import get from "lodash.get";

export default function useCharacterFormInitialValues(characterData) {
    return useMemo(() => ({
        user: {
            name: get(characterData, 'name', ''),
            gender: get(characterData, 'gender', ''),
            culture: get(characterData, 'culture', '')
        }
    }), [characterData])
}
