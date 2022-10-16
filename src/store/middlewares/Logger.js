export const actionLogger = store => {
    return next => {
        return action => {
            console.log("action.type", action.type);

            return next(action);
        };
    };
};
