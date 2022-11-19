import React from 'react';

import OrderList from './OrderList';
import OrderButtonAdd from './OrderButtonAdd';
import OrderFilter from './OrderFilter';
import OrderFreeCarList from './OrderFreeCarList';
import OrderCount from './OrderCount';
import OrderListPrint from './OrderListPrint';

import './order.css';

const Order = () => {
    return (
        <>
            <div className="order_page__control">
                <OrderButtonAdd />
                <OrderFilter />
                <OrderListPrint />
            </div>
            
            <div className="order_page__info">
                <OrderFreeCarList />
                <OrderCount />
            </div>
            <OrderList />
        </>
    );
}

export default Order;