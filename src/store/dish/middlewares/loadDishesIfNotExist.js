import { DISH_ACTIONS, startLoading, failLoading, successLoading } from "../actions";
import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectRestaurantDisheIdsById } from "../../restaurants/selectors";
import { selectDishIds } from "../selectors";

export const loadDishesIfNotExist = (store) => (next) => (action) => {
    if (action.type !== DISH_ACTIONS.loadDishes) {
        return next(action);
    }
    const restaurantId = action.payload.restaurantId;

    // получаем блюда ресторана
    const restaurantDishes = selectRestaurantDisheIdsById(store.getState(), {
        id: restaurantId
    });

    // получаем все загруженные блюда
    const dishIds = selectDishIds(store.getState());

    // console.log("restaurantDishes", restaurantDishes);
    // console.log("dishIds", dishIds);

    // условие, чтобы не подгружались лишний раз блюда
    // если блюдо ресторана входит в загруженные блюда, то - ранний return
    if (
        restaurantDishes.every(
            (restaurantDishId) => dishIds.indexOf(restaurantDishId) !== -1
        )
    ) {
        return;
    }

    store.dispatch(startLoading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
        .then((responce) => responce.json())
        .then((dishes) => {
            store.dispatch(successLoading(normalizeEntities(dishes)))
        })
        .catch((error) => {
            store.dispatch(failLoading());
        })
};
