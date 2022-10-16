import { RESTAURANT_ACTIONS, startLoading, failLoading, successLoading } from "../actions";
import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = (store) => (next) => (action) => {
    // фильтр экшена на загрузку ресторанов
    if (action.type !== RESTAURANT_ACTIONS.loadRestaurants) {
        return next(action);
    }

    // если ресторанов нет, то не делаем ничего
    if (selectRestaurantIds(store.getState())?.length > 0) {
        return;
    }

    store.dispatch(startLoading());

    fetch("http://localhost:3001/api/restaurants")
        .then((responce) => responce.json())
        .then((restaurants) => {
            // готовим нормализованные данные для store
            store.dispatch(successLoading(normalizeEntities(restaurants)))
        })
        .catch((error) => {
            store.dispatch(failLoading());
        })
};
