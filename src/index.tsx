import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/tgk/app/App';
import reportWebVitals from './tests/reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persist_store} from './redux/store';

const app = (<React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist_store}>
            <BrowserRouter/>
            <App/>
        </PersistGate>
    </Provider>
</React.StrictMode>);

const rootElement = document.getElementById("root") !!;

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(app, rootElement);
} else {
    ReactDOM.render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
