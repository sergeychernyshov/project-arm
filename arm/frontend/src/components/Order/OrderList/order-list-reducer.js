import {
    FETCH_ORDER_LIST_REQUEST,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_FAILURE
} from './order-list-action';

const initialState = {
    orderList: [],
    loading: false,
    error: null
};

const orderListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ORDER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ORDER_LIST_SUCCESS:
            return {
                ...state,
                orderList: action.payload.orderList,
                orderListAll: action.payload.orderListAll,
                loading: false
            };
        case FETCH_ORDER_LIST_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderListReducer;