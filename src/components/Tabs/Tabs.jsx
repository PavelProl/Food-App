import React from "react";
import { Tab } from "../Tab/Tab";

export const Tabs = ({ tabs, activeIndex, onClick }) => (
    <div>
        {tabs.map((tab, index) => (
            <Tab
                key={tab}
                title={tab}
                isActive={index === activeIndex}
                onClick={() => onClick(index)}
                isLast={index + 1 === tabs.length}
            />
        ))}
    </div>
);
