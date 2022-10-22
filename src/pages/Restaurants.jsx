import React, { useState, useEffect } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Layout } from "../components/Layout/Layout";
import { RestaurantTabsContainer } from "../containers/RestaurantTabs/RestaurantTabsContainer";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantIds, selectIsRestaurantsLoading } from "../store/restaurants/selectors";
import { loadRestaurants } from "../store/restaurants/actions";

export const Restaurants = () => {
    const dispatch = useDispatch();
    // получаем id ресторанов
    const restaurantIds = useSelector(selectRestaurantIds);
    const isLoading = useSelector(selectIsRestaurantsLoading);

    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    // загружаем рестораны
    useEffect(() => {
        dispatch(loadRestaurants());
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

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
