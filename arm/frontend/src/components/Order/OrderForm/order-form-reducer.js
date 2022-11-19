import {
    SUBMIT_ORDER_FORM_REQUEST,
    SUBMIT_ORDER_FORM_SUCCESS,
    SUBMIT_ORDER_FORM_FAILURE,
} from './order-form-action';

const initialState = {
    loading: false,
    error: null
};

const orderListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_ORDER_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUBMIT_ORDER_FORM_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SUBMIT_ORDER_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderListReducer;