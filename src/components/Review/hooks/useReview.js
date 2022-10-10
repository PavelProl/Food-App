import { useSelector } from "react-redux";
import { selectReviewByIds } from "../../../store/review/selectors";

export const useReview = (reviewId) => {
    const review = useSelector((state) => selectReviewByIds(state, { id: reviewId }));
    return review;
};
