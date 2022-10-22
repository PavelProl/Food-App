export const selectReviewModule = (state) => state.review;

export const selectReviewIds = (state) =>
    selectReviewModule(state).ids;

export const selectReviewByIds = (state, { id }) =>
    selectReviewModule(state).entities[id];

export const selectReviewsLoading = (state) =>
    selectReviewModule(state).status === "loading";
