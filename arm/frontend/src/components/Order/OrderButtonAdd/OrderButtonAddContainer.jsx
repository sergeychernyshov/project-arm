import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderButtonAdd from './OrderButtonAdd';
import OrderForm from '../OrderForm';

import { modalOpen } from '../../common/Modal/modal-action';
import { submitOrderFormCreate } from '../OrderForm/order-form-action';

const mapStateToProps = ({ orderFilter }) => {
    return {
        orderFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalOpen: (orderFilter) => modalOpen({
            title: 'Добавление заявки',
            body: <OrderForm handler={submitOrderFormCreate(orderFilter)} />
        })
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderButtonAdd);