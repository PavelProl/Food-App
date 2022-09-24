import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            {restaurant.name}
            <Menu menu={restaurant.menu} />
            {/* <Reviews reviews={restaurant.reviews} /> */}
        </div>
    );
};

