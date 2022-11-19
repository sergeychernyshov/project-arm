import React from 'react';

import './order-dialog-delete.css';

const OrderDialogDelete = ({ loading, order:  {_id, route }, handler }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        handler(_id);
    };

    const renderButton = (loading)
        ? <input className="order-dialog-delete__input order-dialog-delete__button" id="submit" type="submit" value="Загрузка..." />
        : <input className="order-dialog-delete__input order-dialog-delete__button" id="submit" type="submit" value="Удалить" />

    return (
        <form onSubmit={handleSubmit}>
            <h3>Удалить заявку (Маршрут: {route})?</h3>
    
            {renderButton}
        </form>
    );
}

export default OrderDialogDelete;