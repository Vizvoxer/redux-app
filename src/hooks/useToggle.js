import {useState, useCallback, useMemo } from "react";

export default function useToggle(initialState) {
    const [value, setValue] = useState(initialState);
    const toggleValue = useCallback(() => {
            setValue(!value);

    }, [value])

    return useMemo(() => [value, toggleValue], [toggleValue, value]);
}
