import classnames from "classnames";
import styles from "./styles.module.css";
import { useUser } from "./hooks/useUser";
import { useIsUsersLoading } from "./hooks/useIsUsersLoadong";

export const User = ({ userId, className }) => {
    // получаем пользователя
    const user = useUser(userId);
    // получаем индикацию загрузки пользователей
    const isLoading = useIsUsersLoading();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className={classnames(styles.root, className)}>{user?.name}</div>
    );
};
