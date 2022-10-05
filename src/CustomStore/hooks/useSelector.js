import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { nanoid } from 'nanoid';

// selector - функция, которая выбирает значение из стора,
// при изменении которого будем перерендериваться
export const useSelector = (selector) => {
    const store = useContext(StoreContext);
    const [value, setValue] = useState(selector(store.state));
    // состояние тут нужно, чтобы запускать перерендеры

    useEffect(() => {
        const key = nanoid();

        // подписка на значение, которое выбирает selector
        return store.subscribe(key, (state) => setValue(selector(state))); // при изменении (и обновлении state) сюда придет информация о его обновлении,
        // и далее нам надо перерендерить компонент, который использует этот хук (useSelector)
    }, []);

    return value;
};
