import {
    FETCH_PAYROLL_LIST_REQUEST,
    FETCH_PAYROLL_LIST_SUCCESS,
    FETCH_PAYROLL_LIST_FAILURE
} from './payroll-list-action';

const initialState = {
    payrollList: [],
    loading: false,
    error: null
};

const payrollListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PAYROLL_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PAYROLL_LIST_SUCCESS:
            return {
                ...state,
                payrollList: action.payload,
                loading: false
            };
        case FETCH_PAYROLL_LIST_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default payrollListReducer;