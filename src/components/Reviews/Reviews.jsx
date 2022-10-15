import React from "react";
import { Review } from "../Review/Review";
import classnames from "classnames";
import styles from "./styles.module.css";

export const Reviews = ({ reviewIds, className }) => {
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
