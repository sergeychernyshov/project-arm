const moment = require('moment');

const { Payroll } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.date) {
        find.date = {
            $gte : moment(req.query.date).startOf('month').format(),
            $lt : moment(req.query.date).endOf('month').format()
        }
    }

    Payroll.find(find)
        .sort({createdAt: -1})
        .exec()
        .then(payrollList => res.json(payrollList))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Payroll.create({ ...req.body })
        .then(payroll => res.json(payroll))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Payroll.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
        .exec()
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Payroll.deleteOne({ _id: req.params.id })
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