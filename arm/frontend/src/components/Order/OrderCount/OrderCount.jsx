import React from 'react';

const OrderCount = ({ orderList }) => {
    
    const open = orderList.filter((order) => order.status === 'open').length;
    
    const close = orderList.filter((order) => order.status === 'close').length;
    
    const all = orderList.length;

    return (
        <div>
            В работе: {open} / Закрыто: {close} / Всего: {all}
        </div>
    );
};

export default OrderCount;