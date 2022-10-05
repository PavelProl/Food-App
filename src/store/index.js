import { createStore } from "../CustomStore/store";
import { restaurantReducer } from "./restaurants/reducer";

const rootReducer = (state = {}, action = {}) => ({
    restaurant: restaurantReducer(state.restaurant, action) // прокидываем кучочек state
});

export const store = createStore(rootReducer);
