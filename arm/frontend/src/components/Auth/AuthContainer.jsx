import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Auth from './Auth';
import Info from '../common/Info';

import { login } from './auth-action';

const AuthContainer = (props) => {
    const handleSubmit = (user) => {
        props.login(user);
    };

    const { token, loading, error } = props;

    if (error && error.response.status !== 401) {
        return <Info
            type='error'
        />;
    }

    if (loading) {
        return <Info
            type='loading'
        />;
    }
    
    if (token) {
        return <Redirect to="/"/>;
    }

    return (
        <Auth
            handleSubmit={handleSubmit}
            error={error}
        />
    );
}

const mapStateToProps = ({ auth: {token, loading, error } }) => {
    return {
        token,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { history }) => {
    return bindActionCreators({
        login: login(history)
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);