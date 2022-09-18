import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
    return (
        <div>
            { menu.map((dish) => {
                return (
                    <Dish
                        dish={dish}
                        key={dish.id}
                    />
                );
            })}
        </div>
    );
};
