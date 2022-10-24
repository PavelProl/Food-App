import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadUsersIfNotExist } from "../../../store/user/thunks/loadUsersIfNotExist";

export const useLoadUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersIfNotExist);
    });
}
