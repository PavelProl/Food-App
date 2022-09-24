import React from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";

export const Restaurants = ({ restaurants }) => {
    return (
        <div>
            <Restaurant restaurant={restaurants[0]} />
        </div>
    );
};
