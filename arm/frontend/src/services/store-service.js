import axios from '../packages/axios';

const getLogin = async (user) => {
    return await axios.post('/login', user);
};

const getUserList = async () => {
    return await axios.get('/users');
};

const createUser = async (user) => {
    return await axios.post('/users', user);
};

const updateUser = async (user) => {
    return await axios.put(`/users/${user._id}`, user);
};

const deleteUser = async (id) => {
    return await axios.delete(`/users/${id}`);
};

const getOrderList = async (orderFilter) => {
    return await Promise.all([
        axios.get('/orders', {params: orderFilter}),
        axios.get('/orders', {params: {date: orderFilter.date}})
    ]);
};

const createOrder = async (order) => {
    return await axios.post('/orders', order);
};

const updateOrder = async (order) => {
    return await axios.put(`/orders/${order._id}`, order);
};

const deleteOrder = async (id) => {
    return await axios.delete(`/orders/${id}`);
};

const getWagesList = async (wagesFilter) => {
    return await axios.get('/wages', {params: wagesFilter});
};

export default {
    getLogin,
    getUserList,
    createUser,
    updateUser,
    deleteUser,
    getOrderList,
    createOrder,
    updateOrder,
    deleteOrder,
    getWagesList
};