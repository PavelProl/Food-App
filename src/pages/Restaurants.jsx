import React, { useState } from "react";
import { Restaurant } from "../components/Restaurant/Restaurant";
import { Tabs } from "../components/Tabs/Tabs";
import { useDispatch} from "../CustomStore/hooks/useDispatch";
import { nanoid } from "nanoid";
import { useSelector } from "../CustomStore/hooks/useSelector";

export const Restaurants = () => {
    const restaurants = useSelector((state) => state.restaurant);
    const dispatch = useDispatch();
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            <button 
                onClick={() =>
                    dispatch({
                        type: "addRestaurant",
                        payload: {...restaurants[0], id: nanoid(), name: nanoid()}
                    })
                }
            >
               addRestaurant 
            </button>
            <Tabs
                tabs={restaurants.map((restaurant) => restaurant.name)}
                activeIndex={activeRestaurantIndex}
                onClick={setActiveRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    )
}