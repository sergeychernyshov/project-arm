import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Input from '../../common/Input';

import './order-item.css';

class OrderItem extends Component {
    state = {
        data: {
            manager_share: this.props.orderItem.manager_share || ''
        },
        manager_share_disabled: true
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleOnDoubleClick = () => {
        this.setState({ manager_share_disabled: false});
    }

    handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({ manager_share_disabled: true});
            this.props.submitOrderFormUpdate(
                {
                    _id: this.props.orderItem._id,
                    ...this.state.data
                }
            );
        }
    }

    handleOnClick = (event) => {
        const {name, checked} = event.target;
        
        this.props.submitOrderFormUpdate(
            {
                _id: this.props.orderItem._id,
                [name]: checked
            }
        );
    }

    isPaymentDoc = (payment) => {
        return (payment === 'cash' || payment === 'card');
    }

    render() {
        const {
            orderItem: {
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
                sent_carrier,
                got_customer,
                status,
                note
            },
            modalOpenEdit,
            modalOpenCopy,
            modalOpenDelete,
            role,
            email
        } = this.props;

        const { first_name, last_name } = manager;
        const emailManager = manager.email;

        const statusList = {
            open: 'В работе',
            close: 'Закрыта'
        };

        const paymentList = {
            cashless_nds: 'БН НДС',
            cashless_not_nds: 'БН без НДС',
            cash: 'Нал.',
            card: 'Карта'
        };

        let layoutClassName = 'order_item__layout';

        switch (status) {
            case 'open':
                layoutClassName += ' order_item__layout_open';
                break;
            case 'close':
                layoutClassName += ' order_item__layout_close';
                break;
            default:
        }

        const expired = moment(unloading).add(1, 'd').format() > moment().format();
        const isUserOrder = email === emailManager;
   
        return (
            <div className={layoutClassName}>
                <div className="order_item__col">
                    <div className="order_item__row">
                        <div className="order_item__width_1">
                            <div>Заявка: {order}</div>
                            <div>Счёт: {this.isPaymentDoc(price_payment) ? '-' : account}</div>
                            <div>УПД: {this.isPaymentDoc(price_payment) ? '-' : certificate}</div>

                            <div className={(got_customer) ? '' : 'order_item__mark_active'}>
                                <label htmlFor="got_customer">Получен от зак.</label>
                                <input onClick={this.handleOnClick} checked={got_customer} className="order_form__checkbox" id="got_customer" name="got_customer" type="checkbox" />
                            </div>

                            <div>Статус: {statusList[status]}</div>
                        </div>

                        <div className="order_item__width_2">
                            <div>Менеджер: {last_name} {first_name}</div>
                            <div>Маршрут: {route}</div>
                            <div>Характеристика груза: {cargo_characteristic}</div>
                            <div>Код работы: {work_code}</div>
                            <div>Подача: {moment(delivery).format('DD-MM-YYYY HH:mm')}</div>
                            <div>Разгрузка: {moment(unloading).format('DD-MM-YYYY HH:mm')}</div>
                        </div>

                        <div className="order_item__width_3">
                            <div>Заказчик: {customer}</div>
                            <div>Цена: {price}</div>
                            <div>Форма оплаты: <span className={(price_payment === 'cashless_not_nds') ? 'order_item__attention' : ''}>{paymentList[price_payment]}</span></div>
                            <div>Исполнитель: {performer}</div>
                            <div>Цена: {price_performer}</div>
                            <div>Форма оплаты: <span className={(price_performer_payment === 'cashless_not_nds') ? 'order_item__attention' : ''}>{paymentList[price_performer_payment]}</span></div>
                        </div>

                        <div className="order_item__width_4">
                            <div>Тип авто: {car_type}</div>
                            <div>Гос. номер: <span className="order_item__value">{car_number}</span></div>
                            <div>Ф.И.О.: <span className="order_item__value">{driver}</span></div>  
                            <div>| <span className={trip_ticket ? 'order_item__doc_active' : ''}>Путевой лист</span></div>
                            <div>| <span className={waybill ? 'order_item__doc_active' : ''}>Транс. накл.</span></div>
                            <div>| <span className={delivery_bill ? 'order_item__doc_active' : ''}>Товар. накл.</span></div>
                        </div>
                    </div>

                    {note && <div className="order_item__note">Примечание: {note}</div>}
                </div>
                
                <div className="order_item__action order_item__width_5">

                    {
                        ((expired && isUserOrder)  || role === 'admin') &&
                            <>
                                <div><Link to="#" onClick={modalOpenEdit}>Редактировать</Link></div>
                            </>
                    }
                    {
                        (role === 'admin') &&
                            <>
                                <div><Link to="#" onClick={modalOpenCopy}>Копировать</Link></div>
                            </>
                    }
                    {
                        ((expired && isUserOrder)  || role === 'admin') &&
                            <>
                                <div><Link to="#" onClick={modalOpenDelete}>Удалить</Link></div>

                                <div className={(sent_carrier) ? '' : 'order_item__mark_active'}>
                                    <label htmlFor="sent_carrier">Передан перев.</label>
                                    <input onClick={this.handleOnClick} checked={sent_carrier} className="order_form__checkbox" id="sent_carrier" name="sent_carrier" type="checkbox" />
                                </div>
                            </>
                    }
                            
                   

                    {
                        (role === 'admin') &&
                            <Input
                                type='text'
                                name='manager_share'
                                label='Доля менедж.'
                                value={this.state.data.manager_share}
                                handleChange={this.handleChange}
                                handleOnDoubleClick={this.handleOnDoubleClick}
                                handleOnKeyPress={this.handleOnKeyPress}
                                disabled={this.state.manager_share_disabled}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default OrderItem;