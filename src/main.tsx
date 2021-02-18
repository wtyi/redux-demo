import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { rootState } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={rootState}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
