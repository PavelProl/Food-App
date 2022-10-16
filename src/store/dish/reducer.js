import { DISH_ACTIONS } from "./actions";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISH_ACTIONS.startLoading:
            return {
                ...state, // добавляем данные
                status: "loading"
            }
        case DISH_ACTIONS.successLoading:
            const {entities, ids} = action.payload;
            return {
                entities: {
                    ...state.entities, // берем старые данные
                    ...entities, // добавляем дополнительные данные
                },
                ids: Array.from(new Set([...state.ids, ...ids])), // убираем дубли id
                status: "success"
            }
        case DISH_ACTIONS.failLoading:
            return {
                entities: {},
                ids: [],
                status: "fail"
            }
        default:
            return state;
    }
}
