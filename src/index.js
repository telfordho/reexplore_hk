

import './index.css';
import App from './App';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';





export const store = createStore(rootReducer);


render (
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
