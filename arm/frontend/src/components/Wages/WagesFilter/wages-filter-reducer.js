import moment from 'moment';

import {
    SET_WAGES_FILTER_DATA
} from './wages-filter-action';

const initialState = {
    date_from: moment().startOf('month').startOf('hour').format(),
    date_to: moment().endOf('month').endOf('hour').format(),
    manager: ''
};

const wagesFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WAGES_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default wagesFilterReducer;