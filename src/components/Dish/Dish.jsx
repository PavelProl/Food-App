import React, { useContext } from "react";
import { useCount } from "../../hooks/useCount";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({ dish }) => {
    const theme = useContext(ThemeContext);
    const { decrement, increment, count } = useCount();
    return (
        <div className={styles.root}>
            <div>
                {dish.name}
            </div>
            <button onClick={decrement} disabled={count <= 0}>-</button>
            {/* условная отрисовка, как вариант оформления счетчика, */}
            {/* но вариант с disabled кажется красивее */}
            {/* {count > 0 && <span>{count}</span>} */}
            <span>{count}</span>
            <button onClick={increment} className={classNames({
                [styles.actionDark]: theme === "dark",
                [styles.actionWhite]: theme === "white"
            })}>+</button>
        </div>
    );
};
