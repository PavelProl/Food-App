import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../../store/restaurants/selectors";

export const useRestaurant = (restaurantId) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, { id: restaurantId }));
    return restaurant;
};
