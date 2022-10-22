import { RESTAURANT_ACTIONS, startLoading, failLoading, successLoading } from "../actions";
import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = (store) => (next) => (action) => {
    // отлавливаем и проверяем экшн на загрузку ресторанов
    if (action.type !== RESTAURANT_ACTIONS.loadRestaurants) {
        return next(action);
    }

    // проверяем, загружены ли рестораны
    if (selectRestaurantIds(store.getState())?.length > 0) {
        return;
    }

    // если рестораны не загружены
    store.dispatch(startLoading());

    fetch("http://localhost:3001/api/restaurants")
        .then((responce) => responce.json())
        .then((restaurants) => {
            // складываем нормализованные данные в store
            console.log('restaurants', normalizeEntities(restaurants));
            store.dispatch(successLoading(normalizeEntities(restaurants)))
        })
        .catch((error) => {
            store.dispatch(failLoading());
        })
};
