import axios from 'axios';

import store from './redux';

import env from '../.env.js';

const { protocol, hostname } = window.location;

const instanceAxios = axios.create({
    baseURL: `${protocol}//${hostname}:${env.axios.port}/api/`
});

instanceAxios.interceptors.request.use((config) => {
    const token = store.getState().auth.token;

    config.headers.Authorization =  token;

    return config;
});

export default instanceAxios;