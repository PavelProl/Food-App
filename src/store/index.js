import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { actionLogger } from "./middlewares/Logger";
import { restaurantSlice } from "./restaurants/index";
import { dishSlice } from "./dish/index";
import { reviewSlice } from "./review/index";
import { userSlice } from "./user/index";
// import { customThunk } from "./middlewares/CustomThunk";

// const rootReducer = (state = {}, action = {}) => {
//     const newState = {
//         restaurant: restaurantReducer(state.restaurant, action) // прокидываем кусочек state
//     };
//     console.log(newState);

//     return newState;
// };

const rootReducer = combineReducers({
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    cart: cartSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer
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
        actionLogger    ]
});

console.log("store", store.getState())
