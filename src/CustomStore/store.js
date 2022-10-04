const store = {
    state: {},

    subscribers: {},

    // подписка на изменения
    subscribe(key, callback) {
        if (typeof callback === "function") {
            this.subscribers[key] = callback; // заносим callback в subscribers
            this.subscribers[key](this.state); // сообщаем, какое состояние сейчас
        }

        const unsubscribe = () => delete this.subscribers[key];
        
        return unsubscribe.bind(this);
    }
};

// store.freeze();

export default store;
