import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviewIds, className }) => {
    return (
        <div className={className}>
            {reviewIds.map((reviewId) => {
                return (
                    <Review
                        key={reviewId}
                        reviewId={reviewId}
                    />
                );
            })}
        </div>
    );
};
