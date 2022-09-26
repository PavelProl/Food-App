import React, { useState } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Tabs } from "../components/Tabs/Tabs";

export const Restaurants = ({ restaurants }) => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            <Tabs
                tabs={restaurants.map((restaurant) => restaurant.name)}
                activeIndex={activeRestaurantIndex}
                onClick={setActiveRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    )
}