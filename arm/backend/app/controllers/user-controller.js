const { User } = require('../models');
const bCrypt = require('bcrypt');

const getList = (req, res) => {
    User.find()
        .exec()
        .then(users => res.json(users))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    const password = bCrypt.hashSync(req.body.password, 10);

    User.create({ ...req.body, password })
        .then(user => res.json(user))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    if (req.body.password) {
        const password = bCrypt.hashSync(req.body.password, 10);
        req.body = { ...req.body, password };
    }

    User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .exec()
        .then(user => res.json(user))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .exec()
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};