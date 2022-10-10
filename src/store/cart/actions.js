export const CART_ACTIONS = {
    addDish: "cart/ADD_DISH",
    removeDish: "cart/REMOVE_DISH"
};

export const addDish = (dishId) => ({
    type: CART_ACTIONS.addDish,
    payload: { dishId }
});

export const removeDish = (dishId) => ({
    type: CART_ACTIONS.removeDish,
    payload: { dishId }
});
