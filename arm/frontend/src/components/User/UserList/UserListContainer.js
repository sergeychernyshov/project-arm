import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserItem from '../UserItem';
import UserForm from '../UserForm';
import UserDialogDelete from '../UserDialogDelete';
import Info from '../../common/Info';

import { fetchUserList } from './user-list-action';
import { submitUserFormUpdate, submitUserFormDelete } from '../UserForm/user-form-action';
import { modalOpen } from '../../common/Modal/modal-action';

class UserListContainer extends Component {
    componentDidMount() {
        this.props.fetchUserList();
    }

    render() {
        const { userList, error, modalOpenEdit, modalOpenDelete } = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        return (
            <>
                {
                    userList.map(
                        (userItem) => {
                            return (
                                <UserItem
                                    key={userItem._id}
                                    userItem={userItem}
                                    modalOpenEdit={() => modalOpenEdit(userItem)}
                                    modalOpenDelete={() => modalOpenDelete(userItem)}
                                />
                            );
                        }
                    )
                }
            </>
        );
    }
}

const mapStateToProps = ({ userList: { userList, loading, error } }) => {
    return {
        userList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUserList,
        modalOpenEdit: (user) => modalOpen({
            title: 'Редактирование пользователя',
            body: <UserForm
                user={user}
                handler={submitUserFormUpdate}
            />
        }),
        modalOpenDelete: (user) => modalOpen({
            title: 'Удаление пользователя',
            body: <UserDialogDelete
                user={user}
                handler={() => submitUserFormDelete(user._id)}
            />
        })
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);