import React from "react";
import { Tab } from "../Tab/Tab";
import styles from "./styles.module.css";

export const Tabs = ({ tabIds, activeTabIndex, renderTab }) => (
    <div className={styles.root}>
        {tabIds.map((id, index) =>
            renderTab({
                id,
                isActive: index === activeTabIndex,
                // onClick: () => onClick(index),
                className: styles.tab,
            })
        )}
    </div>
);
