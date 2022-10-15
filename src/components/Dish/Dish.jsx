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
            <span className={styles.dishName}>{dishName}</span>
            <div className={styles.actions}>
                <button onClick={decrement} disabled={count <= 0} className={styles.action}>
                    -
                </button>
                {/* условная отрисовка, как вариант оформления счетчика, */}
                {/* но вариант с disabled кажется красивее */}
                {/* {count > 0 && <span>{count}</span>} */}
                {count}
                <button onClick={increment} className={styles.action}>
                    +
                </button>
            </div>
        </div>
    );
};
