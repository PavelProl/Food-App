import { useSelector } from "react-redux";
import { selectDishesLoading } from "../../../store/dish/selectors";

export const useIsDishesLoading = (restaurantId) => {
    useSelector(selectDishesLoading);
};
