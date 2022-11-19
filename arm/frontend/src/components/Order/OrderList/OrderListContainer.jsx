import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderItem from '../OrderItem';
import OrderForm from '../OrderForm';
import OrderDialogDelete from '../OrderDialogDelete';
import Info from '../../common/Info';

import { fetchOrderList } from './order-list-action';
import { submitOrderFormUpdate, submitOrderFormCreate, submitOrderFormDelete } from '../OrderForm/order-form-action';
import { modalOpen } from '../../common/Modal/modal-action';

class OrderListContainer extends Component {
    componentDidMount() {
        const {fetchOrderList, orderFilter} = this.props;

        fetchOrderList(orderFilter);

        this.interval = setInterval(() => fetchOrderList(orderFilter), 10000);
    }

    componentDidUpdate({ orderFilter }) {
        if (this.props.orderFilter !== orderFilter) {
            clearInterval(this.interval);

            this.interval = setInterval(() => this.props.fetchOrderList(this.props.orderFilter), 10000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { orderList, loading, error, modalOpenEdit, modalOpenCopy, modalOpenDelete, submitOrderFormUpdate, orderFilter, role, email } = this.props;
        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!loading && Object.keys(orderList).length === 0) {
            return <Info
                value="Заявок за данный период не найдено!"
            />;
        }

        return (
            <>
                {
                    orderList.map(
                        (orderItem) => {
                            return (
                                <OrderItem
                                    key={orderItem._id}
                                    orderItem={orderItem}
                                    modalOpenEdit={() => modalOpenEdit(orderItem, orderFilter)}
                                    modalOpenCopy={() => modalOpenCopy(orderItem, orderFilter)}
                                    modalOpenDelete={() => modalOpenDelete(orderItem, orderFilter)}
                                    submitOrderFormUpdate={submitOrderFormUpdate(orderFilter)}
                                    role={role}
                                    email={email}
                                />
                            );
                        }
                    )
                }
            </>
        );
    }
}

const mapStateToProps = ({ orderList: { orderList, loading, error }, orderFilter,  auth: { role, email } }) => {
    return {
        orderList,
        loading,
        error,
        orderFilter,
        role,
        email
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchOrderList,
        submitOrderFormUpdate: (orderFilter) => (dispatch) => (data) => {
            submitOrderFormUpdate(orderFilter)(data)(dispatch);
        },
        modalOpenEdit: (order, orderFilter) => modalOpen({
            title: 'Редактирование заявки',
            body: <OrderForm
                order={order}
                handler={submitOrderFormUpdate(orderFilter)}
            />
        }),
        modalOpenCopy: (order, orderFilter) => modalOpen({
            title: 'Копирование заявки',
            body: <OrderForm
                order={order}
                handler={submitOrderFormCreate(orderFilter)}
            />
        }),
        modalOpenDelete: (order, orderFilter) => modalOpen({
            title: 'Удаление заявки',
            body: <OrderDialogDelete
                order={order}
                handler={submitOrderFormDelete(orderFilter)}
            />
        })
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);