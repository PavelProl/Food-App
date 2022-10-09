import React, { useState } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Tabs } from "../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../store/restaurants/selectors";

export const Restaurants = () => {
    // получаем id ресторанов
    const restaurantIds = useSelector(selectRestaurantIds);
    console.log(restaurantIds)
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            {/* <Tabs
                tabs={restaurants.map((restaurant) => restaurant.name)}
                activeIndex={activeRestaurantIndex}
                onClick={setActiveRestaurantIndex}
            /> */}
            <Restaurant restaurantId={restaurantIds[activeRestaurantIndex]} />
        </div>
    );
}
