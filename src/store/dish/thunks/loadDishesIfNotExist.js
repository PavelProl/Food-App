import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectRestaurantDisheIdsById } from "../../restaurants/selectors";
import { selectDishIds } from "../selectors";
import { dishSliceActions } from "../index";

export const loadDishesIfNotExist = (restaurantId) => (dispatch, getState) => {
    // if (action.type !== DISH_ACTIONS.loadDishes) {
    //     return next(action);
    // }

    // const restaurantId = action.payload.restaurantId;

    // получаем блюда ресторана
    const restaurantDishes = selectRestaurantDisheIdsById(getState(), {
        id: restaurantId
    });

    // получаем все загруженные блюда
    const dishIds = selectDishIds(getState());

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

    dispatch(dishSliceActions.startLoading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
        .then((responce) => responce.json())
        .then((dishes) => {
            dispatch(dishSliceActions.successLoading(normalizeEntities(dishes)))
        })
        .catch((error) => {
            dispatch(dishSliceActions.failLoading());
        })
};
