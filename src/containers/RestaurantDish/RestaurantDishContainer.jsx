import { useSelector } from "react-redux";
import { selectDishNameById } from "../../store/dish/selector";
import { Dish } from "../../components/Dish/Dish";

export const RestaurantDishContainer = ({ dishId }) => {
    const dishName = useSelector(state => selectDishNameById(state, { dishId }));

    return <Dish dishName={dishName} />
};
