/*

import { CART_ACTIONS } from "./actions";

const initialState = {};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTIONS.addDish: {
            const addedDishId = action.payload.dishId;
            return {
                ...state,
                [addedDishId]: (state[addedDishId] ? state[addedDishId] : 0) + 1
            };
        }
        case CART_ACTIONS.removeDish: {
            const removedDishId = action.payload.dishId;
            return {
                ...state,
                [removedDishId]: 
                    !state[removedDishId] || state[removedDishId] === 0
                    ? 0
                    : state[removedDishId] - 1
            };
        }
        default:
            return state
    }
};

*/