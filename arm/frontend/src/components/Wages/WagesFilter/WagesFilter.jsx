import React, { Component } from 'react';
import flatpickr from 'flatpickr';

import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';

import Input from '../../common/Input';
import OrderFormSelectManager from '../../Order/OrderFormSelectManager';

import './wages-filter.css';

class WagesFilter extends Component {
    state = {
        ...this.props.wagesFilter
    };

    componentDidMount() {
        const { date_from, date_to} = this.state;

        if (date_from && date_to) {
            this.props.fetchWagesList(this.state);
        }

        flatpickr('#date_from', {
            "locale": Russian,
            altInput: true,
            altFormat: 'd-m-Y',
            dateFormat: 'Z',
            onChange: this.handleChangeDatePickr,
            defaultDate: date_from
        });

        flatpickr('#date_to', {
            "locale": Russian,
            altInput: true,
            altFormat: 'd-m-Y',
            dateFormat: 'Z',
            onChange: this.handleChangeDatePickr,
            defaultDate: date_to
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setWagesFilter(this.state);

            const { date_from, date_to} = this.state;

            if (date_from && date_to) {
                this.props.fetchWagesList(this.state);
            }
            
        }
    }

    handleChangeDatePickr = (selectedDates, value, { input: { name } }) => {
        this.setState({[name]: value});
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div>
                <form className="wages_filter__row">
                    <Input
                        type='text'
                        name='date_from'
                        label='Дата от'
                    />

                    <Input
                        type='text'
                        name='date_to'
                        label='Дата до'
                    />
                    
                    <OrderFormSelectManager
                        value={this.state.manager}
                        handleChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default WagesFilter;