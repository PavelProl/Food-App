import { restaurants } from "../../constants/fixtures";

export const restaurantReducer = (state = restaurants, action) => {
    switch (action.type) {
        case "addRestaurant":
            const restaurant = action.payload;
            
            return [...state, restaurant];
        default:
            return state;
    }
}