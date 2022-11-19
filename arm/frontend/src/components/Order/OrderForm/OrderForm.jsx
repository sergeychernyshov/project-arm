import React, { Component } from 'react';
import flatpickr from 'flatpickr';

import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.min.css';

import OrderFormSelectManager from '../OrderFormSelectManager';
import Input from '../../common/Input';
import Select from '../../common/Select';

import './order-form.css';

class OrderForm extends Component {
    initialState = {
        data: {
            order: '',
            account: '',
            certificate: '',
            manager: '',
            route: '',
            cargo_characteristic: '',
            work_code: '',
            delivery: '',
            unloading: '',
            customer: '',
            price: '',
            price_payment: '',
            performer: '',
            price_performer: '',
            price_performer_payment: '',
            car_type: '',
            car_number: '',
            driver: '',
            trip_ticket: false,
            waybill: false,
            delivery_bill: false,
            status: 'open',
            note: ''
        },
        errorList: {}
    };

    state = {...this.initialState};

    componentDidMount() {
        if (this.props.order) {
            this.setState({data: { ...this.props.order }});
        }

        flatpickr('#delivery', {
            "locale": Russian,
            enableTime: true,
            altInput: true,
            altFormat: 'd-m-Y H:i',
            dateFormat: 'Z',
            onChange: this.handleChangeDateTimePickr,
            defaultDate: this.props.order && this.props.order.delivery
        });

        flatpickr('#unloading', {
            "locale": Russian,
            enableTime: true,
            altInput: true,
            altFormat: 'd-m-Y H:i',
            dateFormat: 'Z',
            onChange: this.handleChangeDateTimePickr,
            defaultDate: this.props.order && this.props.order.unloading,
            defaultHour: '00'
        });
    }

    handleChange = (event) => {
        const {type, name, value, checked} = event.target;

        const fieldValue = (type === 'checkbox') ? checked : value;

        this.setState(({ data }) => ({data: {...data, [name]: fieldValue}}));
    };

    handleChangeDateTimePickr = (selectedDates, value, { input: { name } }) => {
        this.setState(({ data }) => ({data: { ...data, [name]: value}}));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            this.props.handler(this.state.data);
        }
    };

    handleValidateSubmit = () => {
        const {
            order,
            account,
            certificate,
            manager,
            route,
            cargo_characteristic,
            work_code,
            delivery,
            unloading,
            customer,
            price,
            price_payment,
            performer,
            price_performer,
            price_performer_payment,
            status
        } = this.state.data;

        const messageRequired = 'Обязательно';
        const messageNumber = 'Только цифры';

        const errorListSubmit = {};

        if (!(order === null) && /\D/.test(order)) {
            errorListSubmit.order = messageNumber;
        }

        if (!(account === null) && /\D/.test(account)) {
            errorListSubmit.account = messageNumber;
        }

        if (!(certificate === null) && /\D/.test(certificate)) {
            errorListSubmit.certificate = messageNumber;
        }

        if (!manager) {
            errorListSubmit.manager = messageRequired;
        }
        
        if (!route) {
            errorListSubmit.route = messageRequired;
        }

        if (!cargo_characteristic) {
            errorListSubmit.cargo_characteristic = messageRequired;
        }

        if (!work_code) {
            errorListSubmit.work_code = messageRequired;
        }

        if (!delivery) {
            errorListSubmit.delivery = messageRequired;
        }

        if (!unloading) {
            errorListSubmit.unloading = messageRequired;
        }

        if (!customer) {
            errorListSubmit.customer = messageRequired;
        }

        if (!price && (status === 'close')) {
            errorListSubmit.price = messageRequired;
        }

        if (!(price === null) && /\D/.test(price)) {
            errorListSubmit.price = messageNumber;
        }

        if (!price_payment && price) {
            errorListSubmit.price_payment = messageRequired;
        }

        if (!performer) {
            errorListSubmit.performer = messageRequired;
        }

        if (!price_performer && (status === 'close')) {
            errorListSubmit.price_performer = messageRequired;
        }

        if (!(price_performer === null) && /\D/.test(price_performer)) {
            errorListSubmit.price_performer = messageNumber;
        }

        if (!price_performer_payment && price_performer) {
            errorListSubmit.price_performer_payment = messageRequired;
        }

        this.setState({
            errorList: errorListSubmit
        });

        const result = (Object.keys(errorListSubmit).length === 0);

        return result;
    };

    isPaymentDoc = (payment) => {
        return (payment === 'cash' || payment === 'card');
    }

    render() {
        const {
            data: {
                order,
                account,
                certificate,
                manager,
                route,
                cargo_characteristic,
                work_code,
                delivery,
                unloading,
                customer,
                price,
                price_payment,
                performer,
                price_performer,
                price_performer_payment,
                car_type,
                car_number,
                driver,
                trip_ticket,
                waybill,
                delivery_bill,
                status,
                note
            }
        } = this.state;

        const { loading, error } = this.props;

        let renderSubmitValue;
        
        if (error) {
            renderSubmitValue = 'Ошибка!';
        } else if (loading) {
            renderSubmitValue = 'Загрузка...';
        } else {
            renderSubmitValue = 'Сохранить';
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="order_form__row">
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='order'
                            label='Заявка'
                            value={order}
                            handleChange={this.handleChange}
                            error={this.state.errorList.order}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='account'
                            label='Счёт'
                            value={this.isPaymentDoc(price_payment) ? '-' : (account || '')}
                            placeholder={this.isPaymentDoc(price_payment) ? '-' : ''}
                            handleChange={this.handleChange}
                            error={this.state.errorList.account}
                            disabled={this.isPaymentDoc(price_payment)}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='certificate'
                            label='УПД'
                            value={(price_payment === 'cash' || price_payment === 'card') ? '-' : (certificate || '')}
                            placeholder={(price_payment === 'cash' || price_payment === 'card') ? '-' : ''}
                            handleChange={this.handleChange}
                            error={this.state.errorList.certificate}
                            disabled={(price_payment === 'cash' || price_payment === 'card')}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <OrderFormSelectManager
                            value={manager._id}
                            handleChange={this.handleChange}
                            errorValidation={this.state.errorList.manager}
                        />
                    </div>
                </div>

                <Input
                    type='text'
                    name='route'
                    label='Маршрут'
                    value={route}
                    handleChange={this.handleChange}
                    error={this.state.errorList.route}
                />

                <div className="order_form__row">
                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='cargo_characteristic'
                            label='Характеристика груза'
                            value={cargo_characteristic}
                            handleChange={this.handleChange}
                            error={this.state.errorList.cargo_characteristic}
                        />
                    </div>
                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='work_code'
                            label='Код работы'
                            value={work_code}
                            handleChange={this.handleChange}
                            error={this.state.errorList.work_code}
                        />
                    </div>
                </div>

                <div className="order_form__row">
                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='delivery'
                            label='Подача'
                            value={delivery}
                            handleChange={this.handleChange}
                            error={this.state.errorList.delivery}
                        />
                    </div>

                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='unloading'
                            label='Разгрузка'
                            value={unloading}
                            handleChange={this.handleChange}
                            error={this.state.errorList.unloading}
                        />
                    </div>
                </div>

                <div className="order_form__row">
                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='customer'
                            label='Заказчик'
                            value={customer}
                            handleChange={this.handleChange}
                            error={this.state.errorList.customer}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='price'
                            label='Цена'
                            value={price}
                            handleChange={this.handleChange}
                            error={this.state.errorList.price}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Select
                            name='price_payment'
                            label='Форма оплаты'
                            value={price_payment}
                            optionList={[
                                {value: 'cashless_nds', label: 'БН НДС'},
                                {value: 'cashless_not_nds', label: 'БН без НДС'},
                                {value: 'cash', label: 'Нал.'},
                                {value: 'card', label: 'Карта'},
                            ]}
                            handleChange={this.handleChange}
                            error={this.state.errorList.price_payment}
                            attention={price_payment === 'cashless_not_nds'}
                        />
                    </div>
                </div>

                <div className="order_form__row">
                    <div className="order_form__width_50">
                        <Input
                            type='text'
                            name='performer'
                            label='Испольнитель'
                            value={performer}
                            handleChange={this.handleChange}
                            error={this.state.errorList.performer}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='price_performer'
                            label='Цена'
                            value={price_performer}
                            handleChange={this.handleChange}
                            error={this.state.errorList.price_performer}
                        />
                    </div>
                    <div className="order_form__width_25">
                        <Select
                            name='price_performer_payment'
                            label='Форма оплаты'
                            value={price_performer_payment}
                            optionList={[
                                {value: 'cashless_nds', label: 'БН НДС'},
                                {value: 'cashless_not_nds', label: 'БН без НДС'},
                                {value: 'cash', label: 'Нал.'},
                                {value: 'card', label: 'Карта'},
                            ]}
                            handleChange={this.handleChange}
                            error={this.state.errorList.price_performer_payment}
                            attention={price_performer_payment === 'cashless_not_nds'}
                        />
                    </div>
                </div>

                <div className="order_form__row">
                    <div className="order_form__width_25">
                        <label htmlFor="car_type">Тип авто</label>
                        <input onChange={this.handleChange} value={car_type} className="order_form__input" id="car_type" name="car_type" type="text" autoComplete="off" />
                    </div>
                    <div className="order_form__width_25">
                        <Input
                            type='text'
                            name='car_number'
                            label='Гос. номер'
                            value={car_number}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="order_form__width_50">
                        <label htmlFor="driver">Ф.И.О.</label>
                        <input onChange={this.handleChange} value={driver} className="order_form__input" id="driver" name="driver" type="text" autoComplete="off" />
                    </div>
                </div>

                <div className="order_form__row">
                    <div className="order_form__width_75">
                        <fieldset className="order_form__fieldset">
                            <legend>Возвратные документы</legend>

                            <div className="order_form__row">
                                <div>
                                    <label htmlFor="trip_ticket">Путевой лист</label>
                                    <input onChange={this.handleChange} checked={trip_ticket} className="order_form__checkbox" id="trip_ticket" name="trip_ticket" type="checkbox" />
                                </div>
                                <div>
                                    <label htmlFor="waybill">Транс. накл.</label>
                                    <input onChange={this.handleChange} checked={waybill} className="order_form__checkbox" id="waybill" name="waybill" type="checkbox" />
                                </div>
                                <div>
                                    <label htmlFor="delivery_bill">Товар. накл.</label>
                                    <input onChange={this.handleChange} checked={delivery_bill} className="order_form__checkbox" id="delivery_bill" name="delivery_bill" type="checkbox" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="order_form__width_25">
                        <label htmlFor="status">Статус</label>
                        <select onChange={this.handleChange} value={status} className="order_form__input" id="status" name="status">
                            <option value="open">В работе</option>
                            <option value="close">Закрыта</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="note">Примечание</label>
                    <textarea onChange={this.handleChange} value={note} className="order_form__input" id="note" name="note" rows="2"></textarea>
                </div>
        
                <input className='order_form__input order_form__button' type="submit" value={renderSubmitValue} />
            </form>
        );
    }
}

export default OrderForm;