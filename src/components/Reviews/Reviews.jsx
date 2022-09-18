import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
    return (
        <div>
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
