import React from "react";
import { Dish } from "../Dish/Dish";
import classnames from "classnames";
import styles from "./styles.module.css";
import { RestaurantDishContainer } from "../../containers/RestaurantDish/RestaurantDishContainer";

export const Menu = ({ dishIds, className }) => {
    console.log("dishIds", dishIds);

    return (
        <div className={classnames(styles.root, className)}>
            <span className={styles.title}>Menu</span>
            <div className={styles.content}>
                {dishIds?.map((dishId) => {
                    return (
                        <RestaurantDishContainer
                            key={dishId}
                            dishId={dishId}
                            className={styles.dish}
                        />
                    );
                })}
            </div>
        </div>
    );
};
