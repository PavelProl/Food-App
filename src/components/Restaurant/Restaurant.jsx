import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";

import { useRestaurantRating } from "./hooks/useRestaurantRating";
import { useRestaurant } from "./hooks/useRestaurant";
import { useLoadReviews } from "./hooks/useLoadReviews";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

export const Restaurant = () => {
    const { restaurantId } = useParams();
    const rating = useRestaurantRating(restaurantId);
    const restaurant = useRestaurant(restaurantId);
    // загружаем отзывы
    useLoadReviews(restaurantId);

    if (!restaurant) {
        return null;
    }

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
