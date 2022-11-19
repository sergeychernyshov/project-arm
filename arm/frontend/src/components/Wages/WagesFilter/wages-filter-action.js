const SET_WAGES_FILTER_DATA = 'SET_WAGES_FILTER_DATA';

const setWagesFilter = (wagesFilter) => {
    return {
        type: SET_WAGES_FILTER_DATA,
        payload: wagesFilter
    };
};

export {
    SET_WAGES_FILTER_DATA,
    setWagesFilter
};