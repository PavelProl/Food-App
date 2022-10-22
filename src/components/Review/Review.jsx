import React from "react";
import { Rating } from "../Rating/Rating";
import { useReview } from "./hooks/useReview";
import { User } from "../User/User";

import styles from "./styles.module.css";
import classnames from "classnames";

export const Review = ({ reviewId, className }) => {
    const review = useReview(reviewId);

    if (!review) {
        return null;
    }

    return (
        <div className={classnames(styles.root, className)}>
            <div className={styles.header}>
                <User userId={review.userId} />
                <Rating value={review.rating} size="small" />
            </div>
            <div>{review.text}</div>
        </div>
    );
};
