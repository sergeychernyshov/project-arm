import React, { Component } from 'react';
import flatpickr from 'flatpickr';

import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';

import Input from '../../common/Input';
import OrderFormSelectManager from '../OrderFormSelectManager';

import './order-filter.css';

class OrderFilter extends Component {
    state = {
        ...this.props.orderFilter
    };

    handleChangeDatePickr = (selectedDates, value, { input: { name } }) => {
        this.setState({[name]: value});
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.fetchOrderList(this.state);

            this.props.setOrderFilter(this.state);
        }
    }

    componentDidMount() {
        flatpickr('#date', {
            "locale": Russian,
            altInput: true,
            altFormat: 'd-m-Y',
            dateFormat: 'Z',
            onChange: this.handleChangeDatePickr,
            defaultDate: this.state.date
        });
    }

    render() {
        return (
            <div>
                <form className="order_filter__row">
                    <Input
                        type='text'
                        name='date'
                        label='Дата'
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

export default OrderFilter;