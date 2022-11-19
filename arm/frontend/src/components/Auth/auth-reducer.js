import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT
} from './auth-action';

const initialState = {
    token: null,
    first_name: null,
    last_name: null,
    role: null,
    email: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:
            const { token, first_name, last_name, role, email } = action.payload;

            return {
                ...state,
                token,
                first_name,
                last_name,
                role,
                email,
                loading: false
            };
        case AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case AUTH_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default authReducer;