import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Tab = ({ title, onClick, isActive, isLast }) => (
    <button
        className={classnames(styles.root, {
            [styles.rootActive]: isActive,
            [styles.isLast]: isLast
        })}
        onClick={onClick}>
            {title}
    </button>
);
