import React, { Component } from 'react';
import flatpickr from 'flatpickr';

import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

import 'flatpickr/dist/plugins/monthSelect/style.css';
import 'flatpickr/dist/flatpickr.min.css';

import Input from '../../common/Input';

import './payroll-filter.css';

class PayrollFilter extends Component {
    state = {
        ...this.props.payrollFilter
    };

    componentDidMount() {
        flatpickr(this.datePicker.current, {
            "locale": Russian,
            altInput: true,
            altFormat: 'F Y',
            onChange: this._handleChangeDatePickr,
            defaultDate: this.state.date,
            plugins: [
                new monthSelectPlugin({
                    shorthand: true,
                    dateFormat: 'Z'
                })
            ]
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setPayrollFilter(this.state);

            const { date } = this.state;

            if (date) {
                this.props.fetchPayrollList();
            }
        }
    }

    datePicker = React.createRef();

    _handleChangeDatePickr = (selectedDates, value, { input: { name } }) => {
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <form>
                    <Input
                        type='text'
                        name='date'
                        label='Месяц'
                        refs={this.datePicker}
                    />
                </form>
            </div>
        );
    }
}

export default PayrollFilter;