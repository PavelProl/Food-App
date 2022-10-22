export const REVIEW_ACTIONS = {
    loadReviews: "review/LOAD",
    startLoading: "review/START_LOADING",
    failLoading: "review/FAIL_LOADING",
    successLoading: "review/SUCCESS_LOADING"
};

export const loadReviews = (payload) => ({
    type: REVIEW_ACTIONS.loadReviews,
    payload
});

export const startLoading = () => ({
    type: REVIEW_ACTIONS.startLoading
});

export const failLoading = () => ({
    type: REVIEW_ACTIONS.failLoading
});

export const successLoading = (payload) => ({
    type: REVIEW_ACTIONS.successLoading,
    payload
});
