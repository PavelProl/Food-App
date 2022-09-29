import React from "react";
import { Dish } from "../Dish/Dish";

export const Menu = ({ menu, className }) => {
    return (
        <div className={className}>
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
