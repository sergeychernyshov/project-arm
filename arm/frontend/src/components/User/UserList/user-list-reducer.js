import {
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_FAILURE
} from './user-list-action';

const initialState = {
    userList: [],
    loading: false,
    error: null
};

const userListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.payload,
                loading: false
            };
        case FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userListReducer;