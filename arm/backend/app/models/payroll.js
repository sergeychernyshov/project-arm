const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const payrollSchema = new Schema({
    first_name: String,
    last_name: String,
    wages: Number,
    date: Date,
    pay_list: [{ amount: Number, date: Date, payment: String }],
    note: String
},
{timestamps: true});

module.exports = mongoose.model('Payroll', payrollSchema);