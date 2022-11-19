const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

config.express(app);
config.routes(app);
config.production(app, express);

const { port, mongoDb: { uri, options } } = config.env;

mongoose.connect(uri, options)
    .then(
        () => app.listen(
            port,
            () => console.log(`Listening on port ${port}...`)
        )
    )
    .catch(
        error => console.error(`Error connecting to mongoDB!\n`, error)
    )