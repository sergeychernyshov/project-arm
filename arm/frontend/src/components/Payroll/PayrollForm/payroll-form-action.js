import { createPayroll, updatePayroll, deletePayroll} from './payroll-form-api';

import { fetchPayrollList } from '../PayrollList/payroll-list-action';
import { modalClose } from '../../common/Modal/modal-action';

const SUBMIT_PAYROLL_FORM_REQUEST = 'SUBMIT_PAYROLL_FORM_REQUEST';
const SUBMIT_PAYROLL_FORM_SUCCESS = 'SUBMIT_PAYROLLFORM_SUCCESS';
const SUBMIT_PAYROLL_FORM_FAILURE = 'SUBMIT_PAYROLL_FORM_FAILURE';

const payrollFormRequested = () => {
    return {
        type: SUBMIT_PAYROLL_FORM_REQUEST
    };
};

const payrollFormLoaded = () => {
    return {
        type: SUBMIT_PAYROLL_FORM_SUCCESS
    };
};

const payrollFormError = (error) => {
    return {
        type: SUBMIT_PAYROLL_FORM_FAILURE,
        payload: error
    };
};

const submitPayrollFormCreate = (payroll) => (dispatch) => {
    dispatch(payrollFormRequested());

    createPayroll(payroll)
        .then(() => {
            dispatch(payrollFormLoaded());
            dispatch(modalClose());
            dispatch(fetchPayrollList());
        })
        .catch((error) => dispatch(payrollFormError(error)));
};

const submitPayrollFormUpdate = (payroll) => (dispatch) => {
    dispatch(payrollFormRequested());

    updatePayroll(payroll)
        .then(() => {
            dispatch(payrollFormLoaded());
            dispatch(modalClose());
            dispatch(fetchPayrollList());
        })
        .catch((error) => dispatch(payrollFormError(error)));
};

const submitPayrollFormDelete = (id) => (dispatch) => {
    dispatch(payrollFormRequested());

    deletePayroll(id)
        .then(() => {
            dispatch(payrollFormLoaded());
            dispatch(modalClose());
            dispatch(fetchPayrollList());
        })
        .catch((error) => dispatch(payrollFormError(error)));
};

export {
    SUBMIT_PAYROLL_FORM_REQUEST,
    SUBMIT_PAYROLL_FORM_SUCCESS,
    SUBMIT_PAYROLL_FORM_FAILURE,
    submitPayrollFormCreate,
    submitPayrollFormUpdate,
    submitPayrollFormDelete
};