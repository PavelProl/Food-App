import { useSelector } from "react-redux";
import { selectReviewsLoading } from "../../../store/review/selectors";

export const useIsReviewsLoading = () => {
    useSelector(selectReviewsLoading);
}
