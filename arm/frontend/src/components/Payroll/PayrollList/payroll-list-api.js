import axios from '../../../packages/axios';

const getPayrollList = async (payrollFilter) => {
    return await axios.get('/payrolls', {params: payrollFilter});
};

export {
    getPayrollList
};