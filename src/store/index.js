import { createStore, combineReducers } from "redux";
import { restaurantReducer } from "./restaurants/reducer";

// const rootReducer = (state = {}, action = {}) => {
//     const newState = {
//         restaurant: restaurantReducer(state.restaurant, action) // прокидываем кусочек state
//     };
//     console.log(newState);

//     return newState;
// };

const rootReducer = combineReducers({
    restaurant: restaurantReducer
});

export const store = createStore(rootReducer);
