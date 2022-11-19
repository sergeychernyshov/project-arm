import storeService from '../../../services/store-service';

const FETCH_USER_LIST_REQUEST = 'FETCH_USER_LIST_REQUEST';
const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';

const userListRequested = () => {
    return {
        type: FETCH_USER_LIST_REQUEST
    };
};

const userListLoaded = (userList) => {
    return {
        type: FETCH_USER_LIST_SUCCESS,
        payload: userList
    };
};

const userListError = (error) => {
    return {
        type: FETCH_USER_LIST_FAILURE,
        payload: error
    };
};

const fetchUserList = () => (dispatch) => {
    dispatch(userListRequested());

    storeService.getUserList()
        .then(({ data }) => dispatch(userListLoaded(data)))
        .catch((error) => dispatch(userListError(error)));
};

export {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE,
    fetchUserList
};