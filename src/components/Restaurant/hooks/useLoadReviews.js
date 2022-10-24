import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../../store/review/thunks/loadReviewsIfNotExist";

export const useLoadReviews = (restaurantId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviewsIfNotExist(restaurantId));
    }, [restaurantId]);
}
