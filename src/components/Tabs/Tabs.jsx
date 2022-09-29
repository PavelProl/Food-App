import React from "react";
import { Tab } from "../Tab/Tab";
import styles from "./styles.module.css";

export const Tabs = ({ tabs, activeIndex, onClick }) => (
    <div className={styles.root}>
        {tabs.map((tab, index) => (
            <Tab
                key={tab}
                title={tab}
                isActive={index === activeIndex}
                onClick={() => onClick(index)}
                className={styles.tab}
            />
        ))}
    </div>
);
