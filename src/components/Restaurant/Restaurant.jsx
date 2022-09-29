import React, { useMemo } from "react";
import styles from "./styles.module.css";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Rating } from "../Rating/Rating";

export const Restaurant = ({ restaurant }) => {
    const rating = useMemo(() =>
        Math.floor(
            restaurant.reviews.reduce((acc, review) => {
                return acc + review.rating
            }, 0) / restaurant.reviews.length
        ),
        [restaurant.reviews]
    );

    return (
        <div className={styles.root}>
            {restaurant.name}
            <Rating value={rating} className={styles.rating} />
            <Menu className={styles.menu} menu={restaurant.menu} />
            <Reviews className={styles.reviews} reviews={restaurant.reviews} />
            <NewReviewForm className={styles.newForm} />
        </div>
    );
};
