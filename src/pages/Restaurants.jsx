import React, { useState } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Layout } from "../components/Layout/Layout";
import { RestaurantTabsContainer } from "../containers/RestaurantTabs/RestaurantTabsContainer";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../store/restaurants/selectors";

export const Restaurants = () => {
    // получаем id ресторанов
    const restaurantIds = useSelector(selectRestaurantIds);
    console.log(restaurantIds)
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <Layout>
            <RestaurantTabsContainer
                activeTabIndex={activeRestaurantIndex}
                onClick={setActiveRestaurantIndex}
            />
            {restaurantIds.length > 0 && (
                <Restaurant restaurantId={restaurantIds[activeRestaurantIndex]} />
            )}
        </Layout>
    );
}
