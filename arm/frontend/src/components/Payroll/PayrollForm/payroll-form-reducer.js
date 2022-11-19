import {
    SUBMIT_PAYROLL_FORM_REQUEST,
    SUBMIT_PAYROLL_FORM_SUCCESS,
    SUBMIT_PAYROLL_FORM_FAILURE,
} from './payroll-form-action';

const initialState = {
    loading: false,
    error: null
};

const payrollFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PAYROLL_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUBMIT_PAYROLL_FORM_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SUBMIT_PAYROLL_FORM_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default payrollFormReducer;