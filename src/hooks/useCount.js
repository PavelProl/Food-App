import { useState, useCallback } from "react";

export const useCount = (initialState = 0) => {
    const [count, setCount] = useState(initialState);

    // стабильные ссылки на функции increment, decrement
    const decrement = useCallback(() => {
        return setCount((currentCount) => currentCount - 1)
    }, []);
    const increment = useCallback(() => {
        return setCount((currentCount) => currentCount + 1)
    }, []);

    return { decrement, increment, count };
}
