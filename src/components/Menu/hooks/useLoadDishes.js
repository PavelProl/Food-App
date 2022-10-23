import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { loadDishes } from "../../../store/dish/actions";
import { loadDishesIfNotExist } from "../../../store/dish/thunks/loadDishesIfNotExist";

export const useLoadDishes = (restaurantId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDishesIfNotExist(restaurantId));
    }, [restaurantId]);
};
