import React from "react";
import { useCount } from "../../hooks/useCount";

export const Dish = ({ dish }) => {
    const { decrement, increment, count } = useCount();
    return (
        <div>
            <button onClick={decrement} disabled={count <= 0}>-</button>
            {/* условная отрисовка, как вариант оформления счетчика, */}
            {/* но вариант с disabled кажется красивее */}
            {/* {count > 0 && <span>{count}</span>} */}
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <div>
                {dish.name}
            </div>
        </div>
    );
};
