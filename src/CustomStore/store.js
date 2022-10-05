class Store {
    state;

    // корневой редьюсер
    rootReducer;

    subscribers = {};

    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.state = this.rootReducer(); // первая инициализация состояния, дефолтное
    };

    // подписка на изменения
    subscribe(key, callback) {
        if (typeof callback === "function") {
            this.subscribers[key] = callback; // заносим callback в subscribers (подписываем на информацию)
            this.subscribers[key](this.state); // сообщаем, какое состояние сейчас (сообщаем информацию)
        }

        const unsubscribe = () => delete this.subscribers[key];

        return unsubscribe.bind(this);
    };

    // вносим изменения
    dispatch(action) {
        this.state = this.rootReducer(this.state, action);

        // оповещаем подписчиков
        Object.values(this.subscribers).forEach(callback => callback(this.state));
    }
};

export const createStore = (() => {
    let store;
    return (rootReducer) => {
        if (!store) {
            store = new Store(rootReducer); // инициализация хранилища 
        }
        return store;
    }
})();

// store.freeze();

// export default store;
