const SET_PAYROLL_FILTER_DATA = 'SET_PAYROLL_FILTER_DATA';

const setPayrollFilter = (payrollFilter) => {
    return {
        type: SET_PAYROLL_FILTER_DATA,
        payload: payrollFilter
    };
};

export {
    SET_PAYROLL_FILTER_DATA,
    setPayrollFilter
};