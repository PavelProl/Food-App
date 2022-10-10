import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { useReview } from "./hooks/useReview";
import { User } from "../User/User";

export const Review = ({ reviewId }) => {
    const review = useReview(reviewId);
    console.log('review', review);

    return (
        <div className={styles.container}>
            {/* <div>{`${review.user}: "${review.text}"`}</div> */}
            <User userId={review.userId} />
            <Rating value={review.rating} size="small" />
        </div>
        
    );
};
