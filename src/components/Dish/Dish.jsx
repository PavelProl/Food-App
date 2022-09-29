import React from "react";
import { useCount } from "../../hooks/useCount";
import styles from "./styles.module.css";

export const Dish = ({ dish }) => {
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
            <button onClick={increment}>+</button>
        </div>
    );
};
