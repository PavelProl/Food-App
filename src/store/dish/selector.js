export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) => selectDishModule(state).entities[dishId];

export const selectDishNameById = (state, { dishId }) => selectDishById(state, { dishId }).name;
