import React, { useContext } from "react";
import { useCount } from "../../hooks/useCount";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({ dishName, count, increment, decrement }) => {
    const theme = useContext(ThemeContext);
    // const { decrement } = useCount();

    if (!dishName) {
        return null;
    }

    return (
        <div className={styles.root}>
            <div>
                {dishName}
            </div>
            <button onClick={decrement} disabled={count <= 0} className={classNames({
                [styles.actionDark]: theme === "dark",
                [styles.actionWhite]: theme === "white"
            })}>-</button>
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
