import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectDishNameById } from "../../store/dish/selectors";
import { selectDishCount } from "../../store/cart/selectors";
import { Dish } from "../../components/Dish/Dish";
import { cartSliceActions } from "../../store/cart/index";

export const RestaurantDishContainer = ({ dishId, ...props }) => {
    const dishName = useSelector(state => selectDishNameById(state, { dishId }));
    const dishCount = useSelector(state => selectDishCount(state, { dishId }));

    const dispatch = useDispatch();

    const increment = useCallback(
        () => dispatch(cartSliceActions.addDish(dishId)),
        [dishId]
    );
    const decrement = useCallback(
        () => dispatch(cartSliceActions.removeDish(dishId)),
        [dishId]
    );

    if (!dishName) {
        return null;
    }

    return (
        <Dish
            dishName={dishName}
            count={dishCount || 0}
            increment={increment}
            decrement={decrement}
            {...props}
        />
    );
};
