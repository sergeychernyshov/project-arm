import {
    FETCH_WAGES_LIST_REQUEST,
    FETCH_WAGES_LIST_SUCCESS,
    FETCH_WAGES_LIST_FAILURE
} from './wages-list-action';

const initialState = {
    wagesList: [],
    loading: false,
    error: null
};

const wagesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WAGES_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_WAGES_LIST_SUCCESS:
            return {
                ...state,
                wagesList: action.payload,
                loading: false
            };
        case FETCH_WAGES_LIST_FAILURE:
            return {
                ...state,
                loadind: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default wagesListReducer;