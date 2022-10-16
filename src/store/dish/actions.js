export const DISH_ACTIONS = {
    loadDishes: "dish/LOAD",
    startLoading: "dish/START_LOADING",
    failLoading: "dish/FAIL_LOADING",
    successLoading: "dish/SUCCESS_LOADING"
};

export const loadDishes = (payload) => ({
    type: DISH_ACTIONS.loadDishes,
    payload
});

export const startLoading = () => ({
    type: DISH_ACTIONS.startLoading
});

export const failLoading = () => ({
    type: DISH_ACTIONS.failLoading
});

export const successLoading = (payload) => ({
    type: DISH_ACTIONS.successLoading,
    payload
});
