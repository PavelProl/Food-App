import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/logo.svg";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles.root}>
            <Link to="/">
                <img className={styles.logo} src={Logo} loading="lazy" />
            </Link>
            <Link to="/restaurants" className={styles.link}>toRestaurants</Link>
        </header>
    );
};
