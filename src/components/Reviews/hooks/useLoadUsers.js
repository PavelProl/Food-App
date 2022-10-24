import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadUsers } from "../../../store/user/actions";
import { loadUsersIfNotExist } from "../../../store/user/middlewares/loadUsersIfNotExist";

export const useLoadUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersIfNotExist);
    });
}
