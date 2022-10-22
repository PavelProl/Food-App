export const USER_ACTIONS = {
    loadUsers: "user/LOAD",
    startLoading: "user/START_LOADING",
    failLoading: "user/FAIL_LOADING",
    successLoading: "user/SUCCESS_LOADING"
};

export const loadUsers = () => ({
    type: USER_ACTIONS.loadUsers
});

export const startLoading = () => ({
    type: USER_ACTIONS.startLoading
});

export const failLoading = () => ({
    type: USER_ACTIONS.failLoading
});

export const successLoading = (payload) => ({
    type: USER_ACTIONS.successLoading,
    payload
});
