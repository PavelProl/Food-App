import { useSelector } from "react-redux";
import { selectUserById } from "../../../store/user/selectors";

export const useUser = (userId) => {
    const user = useSelector((state) => selectUserById(state, { userId }));
    return user;
};
