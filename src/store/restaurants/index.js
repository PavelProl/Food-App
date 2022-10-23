import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        startLoading: () => {
            return {
                entities: {},
                ids: [],
                status: "loading"
            };
        },
        successLoading: (state, action) => {
            state.entities = action.payload.entities;
            state.ids = action.payload.ids;
            state.status = "success";
            return state;
        },
        failLoading: () => {
            return {
                entities: {},
                ids: [],
                status: "fail"
            };
        }
    }
});

export const restaurantSliceActions = {
    ...restaurantSlice.actions,
    loadRestaurants: createAction("restaurant/LOAD")
};
