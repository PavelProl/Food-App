import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export const useDispatch = () => {
    const store = useContext(StoreContext);

    return store.dispatch.bind(store);
    // теперь в любом месте приложения можем заюзать хук useDispatch,
    // получить dispatch, передать туда action,
    // и action прилетит в наш стор
}
