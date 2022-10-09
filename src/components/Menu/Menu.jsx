import React from "react";
import { Dish } from "../Dish/Dish";
import classnames from "classnames";
import styles from "./styles.module.css";
import { RestaurantDishContainer } from "../../containers/RestaurantDish/RestaurantDishContainer";

export const Menu = ({ dishIds, className }) => {
    console.log("dishIds", dishIds);

    return (
        <div className={classnames(className, styles.root)}>
            {dishIds.map((dishId) => {
                return (
                    <RestaurantDishContainer
                        key={dishId}
                        dishId={dishId}
                    />
                );
            })}
        </div>
    );
};
