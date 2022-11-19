import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Info from '../Info';

const PrivateRoute = ({ token, role, email, component: Component, only = false, ...otherProps }) => {
    return <Route
        {...otherProps}
        render={(props) =>
            token
                ? (only === false || only === role) ? <Component {...props} /> : <Info type='not-found' />
                : <Redirect to="/login" />
        }
    />
}

const mapStateToProps = ({ auth: { token, role, email } }) => {
    return {
        token,
        role,
        email
    };
};

export default connect(mapStateToProps)(PrivateRoute);