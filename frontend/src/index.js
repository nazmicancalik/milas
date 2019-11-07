import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/shards-ui/dist/css/shards.min.css";
import "./style/index.scss";

import { App } from './containers/App/';

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();