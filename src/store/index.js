import { createStore, combineReducers } from "redux";
import { restaurantReducer } from "./restaurants/reducer";
import { dishReducer } from "./dish/reducer";
import { cartReducer } from "./cart/reducer";
import { reviewReducer } from "./review/reducer";
import { userReducer } from "./user/reducer";

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

export const store = createStore(rootReducer);

// console.log("store", store.getState())