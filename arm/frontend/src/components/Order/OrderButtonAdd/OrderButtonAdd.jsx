import React from 'react';

import './order-button-add.css';

const OrderButtonAdd = ({ modalOpen, orderFilter }) => {
    return (
        <div>
            <button className="order_button_add__button" onClick={() => modalOpen(orderFilter)}>Добавить заявку</button>
        </div>
    );
};

export default OrderButtonAdd;