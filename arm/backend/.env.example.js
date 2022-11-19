module.exports = {
    port: '5000',
    jwtSecret: 'arm',
    mongoDb: {
        uri: 'mongodb://localhost:27017/arm',
        options: {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    }
}