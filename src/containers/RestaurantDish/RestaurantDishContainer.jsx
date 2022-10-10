import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectDishNameById } from "../../store/dish/selector";
import { selectDishCount } from "../../store/cart/selectors";
import { Dish } from "../../components/Dish/Dish";
import { addDish, removeDish } from "../../store/cart/actions";

export const RestaurantDishContainer = ({ dishId }) => {
    const dishName = useSelector(state => selectDishNameById(state, { dishId }));

    const dishCount = useSelector(state => selectDishCount(state, { dishId }));

    const dispatch = useDispatch();

    const increment = useCallback(() => dispatch(addDish(dishId), [dishId]));
    const decrement = useCallback(() => dispatch(removeDish(dishId), [dishId]));

    return (
        <Dish
            dishName={dishName}
            count={dishCount || 0} 
            increment={increment} 
            decrement={decrement}
        />
    );
};
