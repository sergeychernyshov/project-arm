import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';

import { logout } from '../../Auth/auth-action';

class HeaderContainer extends Component {
    handleLogout = () => {
        this.props.logout();
    }

    render() {
        const { token, first_name, last_name, role, email } = this.props;

        return (
            <Header
                token={token}
                first_name={first_name}
                last_name={last_name}
                role={role}
                email={email}
                handleLogout={this.handleLogout}
            />
        );
    }

}

const mapStateToProps = ({ auth: { token, first_name, last_name, role, email } }) => {
    return {
        token,
        first_name,
        last_name,
        role,
        email
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);