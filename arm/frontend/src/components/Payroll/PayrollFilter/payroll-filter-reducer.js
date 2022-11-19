import moment from 'moment';

import {
    SET_PAYROLL_FILTER_DATA
} from './payroll-filter-action';

const initialState = {
    date: moment().format()
};

const payrollFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAYROLL_FILTER_DATA:
            return {
                ...state,
                date: action.payload.date
            };
        default:
            return state;
    }
};

export default payrollFilterReducer;