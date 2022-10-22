import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { loadUsers } from "../../../store/user/actions";

export const useLoadUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    });
}
