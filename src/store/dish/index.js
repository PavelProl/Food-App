import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const dishSlice = createSlice({
    name: "dish",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.status = "loading";
            return state;
          },
        successLoading: (state, action) => {
            state.entities = {
                ...state.entities,
                ...action.payload.entities
            };
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
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

export const dishSliceActions = dishSlice.actions;
