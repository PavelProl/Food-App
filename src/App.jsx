import React, { useState } from "react";
import { Restaurants } from './pages/Restaurants';
import { ThemeContext } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/index";

export const App = ({ restaurants }) => {
    const [theme, setTheme] = useState("white");

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={theme}>
                <div>
                    <button onClick={() => 
                        setTheme(theme === 'white' ? "dark" : "white")}>SwitchTheme
                    </button>
                    <Restaurants restaurants={restaurants} />
                </div>
            </ThemeContext.Provider>
        </Provider>
        
    );
};
