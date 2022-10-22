import { REVIEW_ACTIONS, startLoading, failLoading, successLoading } from "../actions";
import { normalizeEntities } from "../../helpers/normalizeEntities";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIdsById } from "../../restaurants/selectors";

export const loadReviewsIfNotExist = (store) => (next) => (action) => {
    if (action.type !== REVIEW_ACTIONS.loadReviews) {
        return next(action);
    }

    // проверяем, загружены ли отзывы

    //// {
    const restaurantId = action.payload.restaurantId;
    // получаем отзывы ресторана
    const restaurantReviews = selectRestaurantReviewIdsById(store.getState(), {
        id: restaurantId
    });

    // получаем все загруженные отзывы
    const reviewIds = selectReviewIds(store.getState());

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
    store.dispatch(startLoading());

    fetch("http://localhost:3001/api/reviews?id=${restaurantId}")
        .then((response) => response.json())
        .then((reviews) => {
            // складываем нормализованные данные в store
            console.log('reviews', normalizeEntities(reviews));
            store.dispatch(successLoading(normalizeEntities(reviews)))
        })
        .catch((error) => {
            store.dispatch(failLoading());
        })
};
