import store from '../../../packages/redux';

import { getPayrollList } from './payroll-list-api';

const FETCH_PAYROLL_LIST_REQUEST = 'FETCH_PAYROLL_LIST_REQUEST';
const FETCH_PAYROLL_LIST_SUCCESS = 'FETCH_PAYROLL_LIST_SUCCESS';
const FETCH_PAYROLL_LIST_FAILURE = 'FETCH_PAYROLL_LIST_FAILURE';

const payrollListRequested = () => {
    return {
        type: FETCH_PAYROLL_LIST_REQUEST
    };
};

const payrollListLoaded = (wagesList) => {
    return {
        type: FETCH_PAYROLL_LIST_SUCCESS,
        payload: wagesList
    };
};

const payrollListError = (error) => {
    return {
        type: FETCH_PAYROLL_LIST_FAILURE,
        payload: error
    };
};

const fetchPayrollList = () => (dispatch) => {
    const { payrollFilter } = store.getState()
    
    dispatch(payrollListRequested());
    
    getPayrollList(payrollFilter)
        .then(({ data }) => dispatch(payrollListLoaded(data)))
        .catch((error) => dispatch(payrollListError(error)));
};

export {
    FETCH_PAYROLL_LIST_REQUEST,
    FETCH_PAYROLL_LIST_SUCCESS,
    FETCH_PAYROLL_LIST_FAILURE,
    fetchPayrollList
};