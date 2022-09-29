import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews, className }) => {
    return (
        <div className={className}>
            {reviews.map((review) => {
                return (
                    <Review
                        review={review}
                        key={review.id}
                    />
                );
            })}
        </div>
    );
};
