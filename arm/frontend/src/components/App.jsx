import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';
import Info from './common/Info';
import Modal from './common/Modal';
import Header from './common/Header';
import Auth from './Auth';
import User from './User';
import Order from './Order';
import Wages from './Wages';
import Payroll from './Payroll';

import './app.css';

const App = () => {
    return (
        <>
            <Modal />
            <Header />

            <main>
                <div className="_container">
                    <Switch>
                        <Route
                            path="/login"
                            component={Auth}
                            exact
                        />
                        <PrivateRoute
                            path="/users"
                            component={User}
                            only='admin'
                            exact
                        />
                        <PrivateRoute
                            path="/"
                            component={Order}
                            exact
                        />
                        <PrivateRoute
                            path="/wages"
                            component={Wages}
                            only='admin'
                            exact
                        />
                        <PrivateRoute
                            path="/payrolls"
                            component={Payroll}
                            only='admin'
                            exact
                        />
                        <Route
                            component={() => <Info
                                type='not-found'
                            />}
                        />
                    </Switch>
                </div>
            </main>
        </>
    );
}

export default App;