import storeService from '../../../services/store-service';

const FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST = 'FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST';
const FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS = 'FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS';
const FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE = 'FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE';

const orderFormSelectManagerRequested = () => {
    return {
        type: FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST
    };
};

const orderFormSelectManagerLoaded = (managerList) => {
    return {
        type: FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS,
        payload: managerList
    };
};

const orderFormSelectManagerError = (error) => {
    return {
        type: FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE,
        payload: error
    };
};

const fetchOrderFormSelectManager = () => (dispatch) => {
    dispatch(orderFormSelectManagerRequested());
    
    storeService.getUserList()
        .then(({ data }) => dispatch(orderFormSelectManagerLoaded(data)))
        .catch((error) => dispatch(orderFormSelectManagerError(error)));
};

export {
    FETCH_ORDER_FORM_SELECT_MANAGER_REQUEST,
    FETCH_ORDER_FORM_SELECT_MANAGER_SUCCESS,
    FETCH_ORDER_FORM_SELECT_MANAGER_FAILURE,
    fetchOrderFormSelectManager
};