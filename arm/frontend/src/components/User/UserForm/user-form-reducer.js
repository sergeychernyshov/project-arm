import {
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
} from './user-form-action';

const initialState = {
    loading: false,
    error: null
};

const userListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_USER_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUBMIT_USER_FORM_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SUBMIT_USER_FORM_FAILURE:
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