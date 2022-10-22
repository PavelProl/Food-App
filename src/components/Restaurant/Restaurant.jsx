import React, { useMemo } from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Rating } from "../Rating/Rating";

import { useRestaurantRating } from "./hooks/useRestaurantRating";
import { useRestaurant } from "./hooks/useRestaurant";
import { useLoadReviews } from "./hooks/useLoadReviews";

import styles from "./styles.module.css";

export const Restaurant = ({ restaurantId }) => {
    const rating = useRestaurantRating(restaurantId);
    const restaurant = useRestaurant(restaurantId);
    // загружаем отзывы
    useLoadReviews(restaurantId);

    return (
        <div className={styles.container}>
            <div className={styles.restaurantInfo}>
                <div className={styles.title}>{restaurant.name}</div>
                <Rating value={rating} />
            </div>
            <Menu
                className={styles.menu}
                restaurantId={restaurantId}
                dishIds={restaurant.menu}
            />
            <Reviews className={styles.reviews} reviewIds={restaurant.reviews} />
      </div>
    );
};
