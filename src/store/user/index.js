import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const userSlice = createSlice({
    name: "user",
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

export const userSliceActions = userSlice.actions;
