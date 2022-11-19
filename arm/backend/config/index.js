const env = require('../.env.js');
const express = require('./express');
const routes = require('./routes');
const production = require('./production');

module.exports = {
    env,
    express,
    routes,
    production
}