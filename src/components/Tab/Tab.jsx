import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Tab = ({ title, onClick, isActive, className }) => (
    <button
        className={classnames(styles.root, className, {
            [styles.rootActive]: isActive
        })}
        onClick={onClick}>
            {title}
    </button>
);
