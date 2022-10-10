export const selectorCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishId }) => selectorCartModule(state)[dishId];
