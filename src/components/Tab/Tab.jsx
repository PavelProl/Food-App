import React from "react";

export const Tab = ({ title, onClick, isActive }) => (
    <button onClick={onClick}>{title}</button>
);
