import React, { Component } from 'react';
import moment from 'moment';
import flatpickr from 'flatpickr';

import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';

import Input from '../../../../common/Input';
import Select from '../../../../common/Select';
import Button from '../../../../common/Button';

import './payroll-pay-add.css';

class PayrollPayAdd extends Component {
    initialState = {
        data: {
            amount: '',
            date: moment().format(),
            payment: ''
        },
        errorList: {}
    };

    state = this.initialState;

    componentDidMount() {
        flatpickr(this.datePicker.current, {
            "locale": Russian,
            altInput: true,
            altFormat: 'd-m',
            dateFormat: 'Z',
            onChange: this._handleChangeDatePickr,
            defaultDate: this.state.data.date
        });
    }

    datePicker = React.createRef();

    _handleSubmit = (event) => {
        event.preventDefault();

        if (this._handleValidateSubmit()) {

            this.props.payroll.pay_list.push(this.state.data);

            this.props.submitPayrollFormUpdate(this.props.payroll);

            this.setState(this.initialState);
        }
    };

    _handleValidateSubmit = () => {
        const {
            amount,
            date,
            payment
        } = this.state.data;

        const messageRequired = 'Обязательно';
        const messageNumber = 'Только цифры';

        const errorListSubmit = {};

        if (/\D/.test(amount)) {
            errorListSubmit.amount = messageNumber;
        }
        
        if (!amount) {
            errorListSubmit.amount = messageRequired;
        }

        if (!date) {
            errorListSubmit.date = messageRequired;
        }

        if (!payment) {
            errorListSubmit.payment = messageRequired;
        }

        this.setState({
            errorList: errorListSubmit
        });

        const result = (Object.keys(errorListSubmit).length === 0);

        return result;
    };

    _handleChangeDatePickr = (selectedDates, value, { input: { name } }) => {
        this.setState(({ data }) => ({data: { ...data, [name]: value}}));
    }

    _handleChange = ({ target: {name, value} }) => {
        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    render() {
        const { amount, date, payment } = this.state.data;

        return (
            <form className="payroll_pay_add__layout" onSubmit={this._handleSubmit}>
                <div className="payroll_pay_add__field">
                    <Input
                        type='text'
                        name='amount'
                        placeholder='Сумма'
                        value={amount}
                        handleChange={this._handleChange}
                        error={this.state.errorList.amount}
                    />
                </div>

                <div className="payroll_pay_add__field">
                    <Input
                        type='text'
                        name='date'
                        placeholder='Дата'
                        value={date}
                        refs={this.datePicker}
                        handleChange={this._handleChange}
                        error={this.state.errorList.date}
                    />
                </div>

                <div className="payroll_pay_add__field">
                    <Select
                        name='payment'
                        placeholder='Форма оплаты'
                        value={payment}
                        optionList={[
                            {value: 'cash', label: 'Нал.'},
                            {value: 'card', label: 'Карта'},
                        ]}
                        handleChange={this._handleChange}
                        error={this.state.errorList.payment}
                    />
                </div>

                <Button
                    value="+"
                />
            </form>
        );
    }
}

export default PayrollPayAdd;