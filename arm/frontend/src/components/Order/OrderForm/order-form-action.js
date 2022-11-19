import storeService from '../../../services/store-service';

import { fetchOrderList } from '../OrderList/order-list-action';
import { modalClose } from '../../common/Modal/modal-action';

const SUBMIT_ORDER_FORM_REQUEST = 'SUBMIT_ORDER_FORM_REQUEST';
const SUBMIT_ORDER_FORM_SUCCESS = 'SUBMIT_ORDER_FORM_SUCCESS';
const SUBMIT_ORDER_FORM_FAILURE = 'SUBMIT_ORDER_FORM_FAILURE';

const orderFormRequested = () => {
    return {
        type: SUBMIT_ORDER_FORM_REQUEST
    };
};

const orderFormLoaded = () => {
    return {
        type: SUBMIT_ORDER_FORM_SUCCESS
    };
};

const orderFormError = (error) => {
    return {
        type: SUBMIT_ORDER_FORM_FAILURE,
        payload: error
    };
};

const submitOrderFormCreate = (orderFilter) => (orderItem) => (dispatch) => {
    dispatch(orderFormRequested());

    const {_id, createdAt, updatedAt, ...order} = orderItem;
    
    storeService.createOrder(order)
        .then(() => {
            dispatch(orderFormLoaded());
            dispatch(fetchOrderList(orderFilter));
            dispatch(modalClose());
        })
        .catch((error) => dispatch(orderFormError(error)));
};

const submitOrderFormUpdate = (orderFilter) => (order) => (dispatch) => {
    dispatch(orderFormRequested());

    storeService.updateOrder(order)
        .then(() => {
            dispatch(orderFormLoaded());
            dispatch(fetchOrderList(orderFilter));
            dispatch(modalClose());
        })
        .catch((error) => dispatch(orderFormError(error)));
};

const submitOrderFormDelete = (orderFilter) => (id) => (dispatch) => {
    dispatch(orderFormRequested());

    storeService.deleteOrder(id)
        .then(() => {
            dispatch(orderFormLoaded());
            dispatch(fetchOrderList(orderFilter));
            dispatch(modalClose());
        })
        .catch((error) => dispatch(orderFormError(error)));
};

export {
    SUBMIT_ORDER_FORM_REQUEST,
    SUBMIT_ORDER_FORM_SUCCESS,
    SUBMIT_ORDER_FORM_FAILURE,
    submitOrderFormCreate,
    submitOrderFormUpdate,
    submitOrderFormDelete
};