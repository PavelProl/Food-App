import styles from "./styles.module.css";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

export const Tab = ({ title, to, className }) => (
    <NavLink
        to={to}
        className={({isActive}) => 
            classnames(styles.root, className, {
                [styles.rootActive]: isActive
        })}>
            {title}
    </NavLink>
);
