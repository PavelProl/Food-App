/* временно оставил в качестве примера ситуации до перехода на слайсы из Toolkit

import { RESTAURANT_ACTIONS } from "./actions";

const initialState = {
    entities: {},
    ids: [],
    status: "idle" // 'success', 'error', 'loading'
};

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT_ACTIONS.startLoading:
            return {
                entities: {},
                ids: [],
                status: "loading"
            }
        case RESTAURANT_ACTIONS.successLoading:
            // const { entities, ids } = action.payload;
            return {
                entities: action.payload.entities,
                ids: action.payload.ids,
                status: "success"
            }
        case RESTAURANT_ACTIONS.failLoading:
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