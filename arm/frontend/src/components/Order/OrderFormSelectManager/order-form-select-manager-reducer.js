import {
    FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST,
    FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS,
    FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE
} from './order-form-select-manager-action';

const initialState = {
    managerList: [],
    loading: false,
    error: null
};

const orderFormSelectManagerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS:
            return {
                ...state,
                managerList: action.payload,
                loading: false
            };
        case FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderFormSelectManagerReducer;