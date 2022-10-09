import { useMemo } from "react";

export const useRestaurantRating = (restaurantId) => {
    // useMemo(
    //     () =>
    //         Math.floor(
    //             restaurant.reviews.reduce((acc, review) => {
    //                 return acc + review.rating
    //             }, 0) / restaurant.reviews.length
    //         ),
    //         [restaurant.reviews]
    // );
    return 5;
}
