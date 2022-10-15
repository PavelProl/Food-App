import React from "react";
import Logo from "./imgs/logo.svg";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles.root}>
            <img className={styles.logo} src={Logo} loading="lazy" />
        </header>
    );
};
