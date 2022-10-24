import { selectUserIds } from "../selectors";
import { normalizeEntities } from "../../helpers/normalizeEntities";
import { userSliceActions } from "../index";

export const loadUsersIfNotExist = (dispatch, getState) => {
    // отлавливаем и проверяем экшн на загрузку пользователей
    // if (action.type !== USER_ACTIONS.loadUsers) {
    //     return next(action);
    // }

    // проверяем, загружены ли пользователи
    if (selectUserIds(getState())?.length > 0) {
        return;
    }

    // если пользователи не загружены
    dispatch(userSliceActions.startLoading());

    fetch("http://localhost:3001/api/users")
        .then((response) => response.json())
        .then((users) => {
            console.log('users', normalizeEntities(users));
            dispatch(userSliceActions.successLoading(normalizeEntities(users)));
        })
        .catch((error) => {
            dispatch(userSliceActions.failLoading());
        })
}
