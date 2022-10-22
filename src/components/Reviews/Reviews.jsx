import React from "react";
import { Review } from "../Review/Review";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useLoadUsers } from "./hooks/useLoadUsers";
import { useIsReviewsLoading } from "./hooks/useIsReviewsLoading";

export const Reviews = ({ reviewIds, className }) => {
    // грузим пользователей
    useLoadUsers();

    const isLoading = useIsReviewsLoading();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className={classnames(styles.root, className)}>
            <span className={styles.title}>Reviews</span>
            <div className={styles.content}>
                {reviewIds.map((id) => (
                    <Review key={id} reviewId={id} className={styles.review} />
                ))}
            </div>
        </div>
    );
};
