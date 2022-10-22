import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadReviews } from "../../../store/review/actions";

export const useLoadReviews = (restaurantId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviews({ restaurantId }));
    }, [restaurantId]);
}
