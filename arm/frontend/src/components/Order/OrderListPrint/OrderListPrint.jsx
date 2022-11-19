import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import moment from 'moment';

import './order-list-print.css';

class OrderListPrintView extends Component {
    isPaymentDoc = (payment) => {
        return (payment === 'cash' || payment === 'card');
    }

    render() {
        const RenderItem = (props) => {
            const {
                order,
                account,
                certificate,
                manager: { first_name, last_name },
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
            } = props.orderItem;

            const statusList = {
                'open': 'В работе',
                'close': 'Закрыта'
            };

            const paymentList = {
                cashless_nds: 'БН НДС',
                cashless_not_nds: 'БН без НДС',
                cash: 'Нал.',
                card: 'Карта'
            };

            return (
                <>
                    <tr className="order_list_print__table_border">
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="order_list_print__field">Заявка: {order}</td>
                                    </tr>
                                    <tr>
                                        <td className="order_list_print__field">Счёт: {this.isPaymentDoc(price_payment) ? '-' : account}</td>
                                    </tr>
                                    <tr>
                                        <td className="order_list_print__field">УПД: {this.isPaymentDoc(price_payment) ? '-' : certificate}</td>
                                    </tr>
                                    <tr>
                                        <td>Статус: {statusList[status]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Менеджер: {last_name} {first_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Маршрут: {route}</td>
                                    </tr>
                                    <tr>
                                        <td>Характеристика груза: {cargo_characteristic}</td>
                                    </tr>
                                    <tr>
                                        <td>Код работы: {work_code}</td>
                                    </tr>
                                    <tr>
                                        <td>Подача: {moment(delivery).format('DD-MM-YYYY HH:mm')}</td>
                                    </tr>
                                    <tr>
                                        <td>Разгрузка: {moment(unloading).format('DD-MM-YYYY HH:mm')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Заказчик: {customer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цена: {price}</td>
                                    </tr>
                                    <tr>
                                        <td>Форма оплаты: <span className="order_list_print__value">{paymentList[price_payment]}</span></td>
                                    </tr>
                                    <tr>
                                        <td>Исполнитель: {performer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цена: {price_performer}</td>
                                    </tr>
                                    <tr>
                                        <td>Форма оплаты: <span className="order_list_print__value">{paymentList[price_performer_payment]}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Тип авто: {car_type}</td>
                                    </tr>
                                    <tr>
                                        <td>Гос номер: <span className="order_list_print__value">{car_number}</span></td>
                                    </tr>
                                    <tr>
                                        <td>Ф.И.О.: <span className="order_list_print__value">{driver}</span></td>
                                    </tr>
                                    <tr>
                                        <td>| <span className={trip_ticket ? 'order_list_print__doc_active' : ''}>Путевой лист</span></td>
                                    </tr>
                                    <tr>
                                        <td>| <span className={waybill ? 'order_list_print__doc_active' : ''}>Транс. накл.</span></td>
                                    </tr>
                                    <tr>
                                        <td>| <span className={delivery_bill ? 'order_list_print__doc_active' : ''}>Товар. накл.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    
                    {
                        note &&
                            <tr>
                                <td colSpan="4">Примечание: <span className="order_list_print__value">{note}</span></td>
                            </tr>
                    }
                </>
            );
        };

        return (
            <table className="order_list_print__table">
                <tbody>
                    {this.props.orderList.map((orderItem) => <RenderItem key={orderItem._id} orderItem={orderItem}/>)}
                </tbody>
            </table>
        );
    }
}

class OrderListPrint extends Component {
    render() {
        return (
            <>
                <ReactToPrint
                    trigger={() => <div><button className="order_list_print__button">Печать</button></div>}
                    content={() => this.componentRef}
                />
                <OrderListPrintView ref={el => (this.componentRef = el)} orderList={this.props.orderList} />
            </>
        );
    }
}

export default OrderListPrint;