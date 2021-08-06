import React from "react";
import { WeatherContextProvider } from "./context/WeatherContext";
import { Home } from "./pages/Home";

import GlobalStyles from "./styles/global";

function App() {
    return (
        <WeatherContextProvider>
            <Home />
            <GlobalStyles />
        </WeatherContextProvider>
    );
}

export default App;
