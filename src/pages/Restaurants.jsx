import React from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";

export const Restaurants = ({ restaurants }) => {
    return (
        <div>
            { restaurants.map((restaurant) => {
                return (
                    <Restaurant
                        restaurant={restaurant}
                        key={restaurant.id} 
                    />
                );
            })}
        </div>
    );
};
