const { Order } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.date_from && req.query.date_to) {
        find.delivery = {
            $gte : new Date(req.query.date_from).setHours(0, 0, 0, 0),
            $lt : new Date(req.query.date_to).setHours(23, 59, 59, 59)
        }
    }

    if (req.query.manager) {
        find.manager = req.query.manager
    }

    if (!find.delivery || !find.manager) {
        return res.json([]);
    }

    Order.find(find, 'delivery order manager_share')
        .sort({delivery: -1})
        .exec()
        .then(wagesList => res.json(wagesList))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList
};