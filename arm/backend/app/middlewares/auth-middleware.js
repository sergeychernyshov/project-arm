const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../.env.js');

module.exports = (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        res.status(401).json({ message: 'Token not provided!' });

        return;
    }

    try {
        jwt.verify(token, jwtSecret);
    } catch(e) {
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Invalid token!' });

            return;
        }
    }

    next();
};