import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectRestaurantIds } from "../selectors";
import { restaurantSliceActions } from "../index";

export const loadRestaurantsIfNotExist = (dispatch, getState) => {
    // отлавливаем и проверяем экшн на загрузку ресторанов
    // if (action.type !== restaurantSliceActions.loadRestaurants.type) {
    //     return next(action);
    // }

    // проверяем, загружены ли рестораны
    if (selectRestaurantIds(getState())?.length > 0) {
        return;
    }

    // если рестораны не загружены
    dispatch(restaurantSliceActions.startLoading());

    fetch("http://localhost:3001/api/restaurants")
        .then((responce) => responce.json())
        .then((restaurants) => {
            // складываем нормализованные данные в store
            console.log('restaurants', normalizeEntities(restaurants));
            dispatch(restaurantSliceActions.successLoading(normalizeEntities(restaurants)))
        })
        .catch((error) => {
            dispatch(restaurantSliceActions.failLoading());
        })
};
