const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../.env.js');
const { User } = require('../models');

const login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .exec()
        .then(
            (user) => {
                if (!user) {
                    res.status(401).json({ message: 'Пользователь не существует!' });

                    return;
                }

                const isValid = bCrypt.compareSync(password, user.password);

                if (isValid) {
                    const payload = {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        role: user.role,
                        email: user.email
                    };

                    const token = jwt.sign(payload, jwtSecret);

                    res.json({ token });
                } else {
					/////////////
					//const payload = {
                    //    first_name: user.first_name,
                    //    last_name: user.last_name,
                    //    role: user.role,
                    //    email: user.email
                    //};
					//
					//const token = jwt.sign(payload, jwtSecret);
					//
                    //res.json({ token });
					/////////////
                    res.status(401).json({ message: 'Неверные учётные данные!' })
                }
            }
        )
        .catch(error => res.status(500).json({ message: error.message }));
};

module.exports = {
    login
}