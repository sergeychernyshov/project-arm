import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserButtonAdd from './UserButtonAdd';
import UserForm from '../UserForm';

import { modalOpen } from '../../common/Modal/modal-action';
import { submitUserFormCreate } from '../UserForm/user-form-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalOpen: () => modalOpen({
            title: 'Добавление пользователя',
            body: <UserForm handler={submitUserFormCreate} />
        })
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(UserButtonAdd);