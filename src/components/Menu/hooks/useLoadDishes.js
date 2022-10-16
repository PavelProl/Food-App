import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadDishes } from "../../../store/dish/actions";

export const useLoadDishes = (restaurantId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDishes({ restaurantId }));
    }, [restaurantId]);
};
