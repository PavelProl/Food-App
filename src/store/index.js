import { createStore, combineReducers, applyMiddleware } from "redux";
import { restaurantReducer } from "./restaurants/reducer";
import { dishReducer } from "./dish/reducer";
import { cartReducer } from "./cart/reducer";
import { reviewReducer } from "./review/reducer";
import { userReducer } from "./user/reducer";
import { actionLogger } from "./middlewares/Logger";
import { loadRestaurantsIfNotExist } from "./restaurants/middlewares/loadRestaurantsIfNotExist";
import { loadDishesIfNotExist } from "./dish/middlewares/loadDishesIfNotExist";
import { loadUsersIfNotExist } from "./user/middlewares/loadUsersIfNotExist";
import { loadReviewsIfNotExist } from "./review/middlewares/loadReviewsIfNotExist";

// const rootReducer = (state = {}, action = {}) => {
//     const newState = {
//         restaurant: restaurantReducer(state.restaurant, action) // прокидываем кусочек state
//     };
//     console.log(newState);

//     return newState;
// };

const rootReducer = combineReducers({
    restaurant: restaurantReducer,
    dish: dishReducer,
    cart: cartReducer,
    review: reviewReducer,
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(actionLogger, loadRestaurantsIfNotExist, loadDishesIfNotExist, loadUsersIfNotExist, loadReviewsIfNotExist));

console.log("store", store.getState())
