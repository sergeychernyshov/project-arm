const { Order } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.date) {
        find.delivery = {
            $gte : new Date(req.query.date).setHours(0, 0, 0, 0),
            $lt : new Date(req.query.date).setHours(23, 59, 59, 59)
        }
    }

    if (req.query.manager) {
        find.manager = req.query.manager
    }

    Order.find(find)
        .sort({
            status: -1,
            createdAt: -1})
        .populate('manager')
        .exec()
        .then(orderList => res.json(orderList))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Order.create({ ...req.body })
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
        .exec()
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Order.deleteOne({ _id: req.params.id })
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