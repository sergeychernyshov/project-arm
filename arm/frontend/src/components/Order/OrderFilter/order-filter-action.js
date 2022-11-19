const SET_ORDER_FILTER_DATA = 'SET_ORDER_FILTER_DATA';

const setOrderFilter = (orderFilter) => {
    return {
        type: SET_ORDER_FILTER_DATA,
        payload: orderFilter
    };
};

export {
    SET_ORDER_FILTER_DATA,
    setOrderFilter
};