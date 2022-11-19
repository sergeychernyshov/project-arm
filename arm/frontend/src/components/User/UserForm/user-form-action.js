import storeService from '../../../services/store-service';

import { fetchUserList } from '../UserList/user-list-action';
import { modalClose } from '../../common/Modal/modal-action';

const SUBMIT_USER_FORM_REQUEST = 'SUBMIT_USER_FORM_REQUEST';
const SUBMIT_USER_FORM_SUCCESS = 'SUBMIT_USER_FORM_SUCCESS';
const SUBMIT_USER_FORM_FAILURE = 'SUBMIT_USER_FORM_FAILURE';

const userFormRequested = () => {
    return {
        type: SUBMIT_USER_FORM_REQUEST
    };
};

const userFormLoaded = () => {
    return {
        type: SUBMIT_USER_FORM_SUCCESS
    };
};

const userFormError = (error) => {
    return {
        type: SUBMIT_USER_FORM_FAILURE,
        payload: error
    };
};

const submitUserFormCreate = (user) => (dispatch) => {
    dispatch(userFormRequested());

    storeService.createUser(user)
        .then(() => {
            dispatch(userFormLoaded());
            dispatch(fetchUserList());
            dispatch(modalClose());
        })
        .catch((error) => dispatch(userFormError(error)));
};

const submitUserFormUpdate = (user) => (dispatch) => {
    dispatch(userFormRequested());

    storeService.updateUser(user)
        .then(() => {
            dispatch(userFormLoaded());
            dispatch(fetchUserList());
            dispatch(modalClose());
        })
        .catch((error) => dispatch(userFormError(error)));
};

const submitUserFormDelete = (id) => (dispatch) => {
    dispatch(userFormRequested());

    storeService.deleteUser(id)
        .then(() => {
            dispatch(userFormLoaded());
            dispatch(fetchUserList());
            dispatch(modalClose());
        })
        .catch((error) => dispatch(userFormError(error)));
};

export {
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
    submitUserFormCreate,
    submitUserFormUpdate,
    submitUserFormDelete
};