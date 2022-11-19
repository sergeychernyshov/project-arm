import storeService from '../../../services/store-service';

const FETCH_WAGES_LIST_REQUEST = 'FETCH_WAGES_LIST_REQUEST';
const FETCH_WAGES_LIST_SUCCESS = 'FETCH_WAGES_LIST_SUCCESS';
const FETCH_WAGES_LIST_FAILURE = 'FETCH_WAGES_LIST_FAILURE';

const wagesListRequested = () => {
    return {
        type: FETCH_WAGES_LIST_REQUEST
    };
};

const wagesListLoaded = (wagesList) => {
    return {
        type: FETCH_WAGES_LIST_SUCCESS,
        payload: wagesList
    };
};

const wagesListError = (error) => {
    return {
        type: FETCH_WAGES_LIST_FAILURE,
        payload: error
    };
};

const fetchWagesList = (wagesFilter) => (dispatch) => {

    dispatch(wagesListRequested());
    
    storeService.getWagesList(wagesFilter)
        .then(({ data }) => dispatch(wagesListLoaded(data)))
        .catch((error) => dispatch(wagesListError(error)));
};

export {
    FETCH_WAGES_LIST_REQUEST,
    FETCH_WAGES_LIST_SUCCESS,
    FETCH_WAGES_LIST_FAILURE,
    fetchWagesList
};