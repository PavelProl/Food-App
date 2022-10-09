import React, { useMemo } from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Rating } from "../Rating/Rating";

import { useRestaurantRating } from "./hooks/useRestaurantRating";
import { useRestaurant } from "./hooks/useRestaurant";

import styles from "./styles.module.css";


export const Restaurant = ({ restaurantId }) => {
    const rating = useRestaurantRating(restaurantId);
    const restaurant = useRestaurant(restaurantId);
    console.log("restaurant", restaurant)

    return (
        <div className={styles.root}>
            {restaurant.name}
            <Rating value={rating} className={styles.rating} />
            <Menu className={styles.menu} dishIds={restaurant.menu} />
            {/* <Reviews className={styles.reviews} reviews={restaurant.reviews} /> */}
            {/* <NewReviewForm className={styles.newForm} /> */}
        </div>
    );
};
