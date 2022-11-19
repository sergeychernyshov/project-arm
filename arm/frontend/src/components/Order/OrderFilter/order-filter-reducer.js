import moment from 'moment';

import {
    SET_ORDER_FILTER_DATA
} from './order-filter-action';

const initialState = {
    date: moment().format(),
    manager: ''
};

const orderFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDER_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default orderFilterReducer;