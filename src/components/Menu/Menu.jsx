import React from "react";
import { Dish } from "../Dish/Dish";
import classnames from "classnames";
import styles from "./styles.module.css";

export const Menu = ({ menu, className }) => {
    return (
        <div className={classnames(className, styles.root)}>
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
