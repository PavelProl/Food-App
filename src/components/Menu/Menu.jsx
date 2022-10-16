import React from "react";
import { Dish } from "../Dish/Dish";
import classnames from "classnames";
import styles from "./styles.module.css";
import { RestaurantDishContainer } from "../../containers/RestaurantDish/RestaurantDishContainer";
import { useLoadDishes } from "./hooks/useLoadDishes";
import { useIsDishesLoading } from "./hooks/useIsDishesLoading";

export const Menu = ({ restaurantId, dishIds, className }) => {
    useLoadDishes(restaurantId);
    const isLoading = useIsDishesLoading();

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
