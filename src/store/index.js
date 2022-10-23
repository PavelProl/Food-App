import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dishReducer } from "./dish/reducer";
import { cartReducer } from "./cart/reducer";
import { reviewReducer } from "./review/reducer";
import { userReducer } from "./user/reducer";
import { actionLogger } from "./middlewares/Logger";
import { loadRestaurantsIfNotExist } from "./restaurants/thunks/loadRestaurantsIfNotExist";
import { loadDishesIfNotExist } from "./dish/middlewares/loadDishesIfNotExist";
import { loadUsersIfNotExist } from "./user/middlewares/loadUsersIfNotExist";
import { loadReviewsIfNotExist } from "./review/middlewares/loadReviewsIfNotExist";
import { restaurantSlice } from "./restaurants/index";
import { customThunk } from "./middlewares/CustomThunk";

// const rootReducer = (state = {}, action = {}) => {
//     const newState = {
//         restaurant: restaurantReducer(state.restaurant, action) // прокидываем кусочек state
//     };
//     console.log(newState);

//     return newState;
// };

const rootReducer = combineReducers({
    restaurant: restaurantSlice.reducer,
    dish: dishReducer,
    cart: cartReducer,
    review: reviewReducer,
    user: userReducer
});

// export const store = createStore(rootReducer, applyMiddleware(
//     actionLogger,
//     loadRestaurantsIfNotExist,
//     loadDishesIfNotExist,
//     loadUsersIfNotExist,
//     loadReviewsIfNotExist
// ));

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => [
        // customThunk,
        ...getDefaultMiddleware(),
        actionLogger,
        loadDishesIfNotExist,
        loadUsersIfNotExist,
        loadReviewsIfNotExist
    ]
});

console.log("store", store.getState())
