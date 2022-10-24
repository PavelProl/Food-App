import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addDish: (state) => {
            const addedDishId = action.payload.dishId;
            state[addedDishId] = (state[addedDishId] ? state[addedDishId] : 0) + 1;
            return state;
        },
        removeDish: () => {
            const removedDishId = action.payload.dishId;
            state[removedDishId] =
                !state[removedDishId] || state[removedDishId] === 0
                ? 0
                : state[removedDishId] - 1;
            return state;
        }
    }
});

export const cartSliceActions = cartSlice.actions;
