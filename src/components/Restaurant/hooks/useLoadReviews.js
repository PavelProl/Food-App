import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../../store/review/middlewares/loadReviewsIfNotExist";

export const useLoadReviews = (restaurantId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviewsIfNotExist(restaurantId));
    }, [restaurantId]);
}
