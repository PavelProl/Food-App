export const RESTAURANT_ACTIONS = {
    loadRestaurants: "restaurant/LOAD",
    startLoading: "restaurant/START_LOADING",
    failLoading: "restaurant/FAIL_LOADING",
    successLoading: "restaurant/SUCCESS_LOADING"
};

export const loadRestaurants = () => ({
    type: RESTAURANT_ACTIONS.loadRestaurants
});

export const startLoading = () => ({
    type: RESTAURANT_ACTIONS.startLoading
});

export const failLoading = () => ({
    type: RESTAURANT_ACTIONS.failLoading
});

export const successLoading = (payload) => ({
    type: RESTAURANT_ACTIONS.successLoading,
    payload
});
