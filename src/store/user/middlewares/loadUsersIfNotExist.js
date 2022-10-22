import { USER_ACTIONS, startLoading, successLoading, failLoading } from "../actions";
import { selectUserIds } from "../selectors";
import { normalizeEntities } from "../../helpers/normalizeEntities";

export const loadUsersIfNotExist = (store) => (next) => (action) => {
    // отлавливаем и проверяем экшн на загрузку пользователей
    if (action.type !== USER_ACTIONS.loadUsers) {
        return next(action);
    }

    // проверяем, загружены ли пользователи
    if (selectUserIds(store.getState())?.length > 0) {
        return;
    }

    // если пользователи не загружены
    store.dispatch(startLoading());

    fetch("http://localhost:3001/api/users")
        .then((response) => response.json())
        .then((users) => {
            console.log('users', normalizeEntities(users));
            store.dispatch(successLoading(normalizeEntities(users)));
        })
        .catch((error) => {
            store.dispatch(failLoading());
        })
}
