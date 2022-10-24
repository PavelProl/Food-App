import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIdsById } from "../../restaurants/selectors";
import { reviewSliceActions } from "../index";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {

    // if (action.type !== REVIEW_ACTIONS.loadReviews) {
    //     return next(action);
    // }

    // проверяем, загружены ли отзывы

    //// {
    // const restaurantId = action.payload.restaurantId;
    // получаем отзывы ресторана
    const restaurantReviews = selectRestaurantReviewIdsById(getState(), {
        id: restaurantId
    });

    // получаем все загруженные отзывы
    const reviewIds = selectReviewIds(getState());

    // проверяем на вхождение отзывов ресторана в загруженные отзывы
    if (
        restaurantReviews.every(
            (restaurantReview) => reviewIds.indexOf(restaurantReview) !== -1
        )
    ) {
        // если отзывы загружены - выходим
        return;
    }
    //// }

    // если отзывы не загружены
    dispatch(reviewSliceActions.startLoading());

    fetch("http://localhost:3001/api/reviews?id=${restaurantId}")
        .then((response) => response.json())
        .then((reviews) => {
            // складываем нормализованные данные в store
            console.log('reviews', normalizeEntities(reviews));
            dispatch(reviewSliceActions.successLoading(normalizeEntities(reviews)))
        })
        .catch((error) => {
            dispatch(reviewSliceActions.failLoading());
        })
};
