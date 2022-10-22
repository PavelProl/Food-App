import { REVIEW_ACTIONS } from "./actions";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_ACTIONS.startLoading:
            return {
                ...state, // добавляем данные
                status: "loading"
            }
        case REVIEW_ACTIONS.successLoading:
            const {entities, ids} = action.payload;
            return {
                entities: {
                    ...state.entities, // берем старые данные
                    ...entities, // добавляем дополнительные данные
                },
                ids: Array.from(new Set([...state.ids, ...ids])), // убираем дубли id
                status: "success"
            }
        case REVIEW_ACTIONS.failLoading:
            return {
                entities: {},
                ids: [],
                status: "fail"
            }
        default:
            return state;
    }
}
