/* временно оставил в качестве примера ситуации до перехода на слайсы из Toolkit

import { USER_ACTIONS } from "./actions";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.startLoading:
            return {
                entities: {},
                ids: [],
                status: "loading"
            }
        case USER_ACTIONS.successLoading:
            return {
                entities: action.payload.entities,
                ids: action.payload.ids,
                status: "success"
            }
        case USER_ACTIONS.failLoading:
            return {
                entities: {},
                ids: [],
                status: "fail"
            }
        default:
            return state;
    }
}

*/