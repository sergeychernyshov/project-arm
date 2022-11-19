import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import 'normalize.css';

import store from './packages/redux';

import App from './components';
import ErrorBoundry from './components/common/ErrorBoundry';

import { authLoaded } from './components/Auth/auth-action';

if (localStorage.token) {
    const token = localStorage.getItem('token');

    const jwtPayload = jwtDecode(token);

    const authPayload = {
        token,
        ...jwtPayload
    };

    store.dispatch(authLoaded(authPayload));
}

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);