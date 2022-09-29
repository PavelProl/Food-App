import React from "react";
import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";

export const Review = ({ review }) => {
    return (
        <div className={styles.container}>
            <div>{`${review.user}: "${review.text}"`}</div>
            <Rating value={review.rating} size="small" />
        </div>
        
    );
};
