import React, { useState } from "react";
import { Restaurants } from './pages/Restaurants';
import { ThemeContext } from "./contexts/ThemeContext";
import { store } from "./CustomStore/store";

export const App = ({ restaurants }) => {
    const [theme, setTheme] = useState("white");

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={theme}>
                <div>
                    <button onClick={() => 
                        setTheme(theme === 'white' ? "dark" : "white")}>SwitchTheme
                    </button>
                    <Restaurants restaurants={restaurants} theme={theme}/>
                </div>
            </ThemeContext.Provider>
        </Provider>
        
    );
};
