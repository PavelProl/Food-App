import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { RestaurantTabsContainer } from "../containers/RestaurantTabs/RestaurantTabsContainer";
import { selectIsRestaurantsLoading } from "../store/restaurants/selectors";
import { loadRestaurantsIfNotExist } from "../store/restaurants/thunks/loadRestaurantsIfNotExist";

export const Restaurants = () => {
    const dispatch = useDispatch();
    // получаем id ресторанов
    // const restaurantIds = useSelector(selectRestaurantIds);
    const isLoading = useSelector(selectIsRestaurantsLoading);

    // const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    // загружаем рестораны
    useEffect(() => {
        dispatch(loadRestaurantsIfNotExist);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <RestaurantTabsContainer
                // activeTabIndex={activeRestaurantIndex}
                // onClick={setActiveRestaurantIndex}
            />
            <Outlet />

            {/* {restaurantIds.length > 0 && (
                <Restaurant restaurantId={restaurantIds[activeRestaurantIndex]} />
            )} */}
        </>
    );
}
