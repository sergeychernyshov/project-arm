import storeService from '../../../services/store-service';

const FETCH_ORDER_LIST_REQUEST = 'FETCH_ORDER_LIST_REQUEST';
const FETCH_ORDER_LIST_SUCCESS = 'FETCH_ORDER_LIST_SUCCESS';
const FETCH_ORDER_LIST_FAILURE = 'FETCH_ORDER_LIST_FAILURE';

const orderListRequested = () => {
    return {
        type: FETCH_ORDER_LIST_REQUEST
    };
};

const orderListLoaded = (orderList, orderListAll) => {
    return {
        type: FETCH_ORDER_LIST_SUCCESS,
        payload: {
            orderList,
            orderListAll
        }
    };
};

const orderListError = (error) => {
    return {
        type: FETCH_ORDER_LIST_FAILURE,
        payload: error
    };
};

const fetchOrderList = (orderFilter) => (dispatch) => {

    dispatch(orderListRequested());
    
    storeService.getOrderList(orderFilter)
        .then(([orderList, orderListAll]) => {
            dispatch(orderListLoaded(orderList.data, orderListAll.data))
        })
        .catch((error) => dispatch(orderListError(error)));
};

export {
    FETCH_ORDER_LIST_REQUEST,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_FAILURE,
    fetchOrderList
};