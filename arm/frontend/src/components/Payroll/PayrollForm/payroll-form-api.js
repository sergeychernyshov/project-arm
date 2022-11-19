import axios from '../../../packages/axios';

const createPayroll = async (payroll) => {
    return await axios.post('/payrolls', payroll);
};

const updatePayroll = async (payroll) => {
    const {_id, ...data} = payroll;

    return await axios.put(`/payrolls/${_id}`, data);
};

const deletePayroll = async (id) => {
    return await axios.delete(`/payrolls/${id}`);
};

export {
    createPayroll,
    updatePayroll,
    deletePayroll
};