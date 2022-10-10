import { useUser } from "./hooks/useUser";
import classnames from "classnames";
import styles from "./styles.module.css";

export const User = ({ userId, className }) => {
    const user = useUser(userId);

    return (
        <div className={classnames(styles.root, className)}>{user.name}</div>
    );
};
