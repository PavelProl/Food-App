import { normalizedRestaurants } from "../../constants/normalized-fixtures";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map(restaurant => restaurant.id)
};

console.log(initialState);

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addRestaurant":
            const restaurant = action.payload;
            
            return [...state, restaurant];
        default:
            return state;
    }
}
