import React from 'react';
import moment from 'moment';

import './payroll-pay-dialog-delete.css';

const PayrollPayDialogDelete = ({ loading, error, handler, pay, payroll }) => {
    const { amount, date, payment } = pay;
    const {first_name, last_name} = payroll;

    const paymentList = {
        cash: 'Нал.',
        card: 'Карта'
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handler();
    };

    let renderSubmitValue;
        
    if (error) {
        renderSubmitValue = 'Ошибка!';
    } else if (loading) {
        renderSubmitValue = 'Загрузка...';
    } else {
        renderSubmitValue = 'Удалить';
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Удалить платёж ({amount} / {moment(date).format('DD-MM-YYYY')} / {paymentList[payment]} / {last_name} {first_name})?</h3>
    
            <input className="payroll-pay-dialog-delete__input payroll-pay-dialog-delete__button" id="submit" type="submit" value={renderSubmitValue} />
        </form>
    );
}

export default PayrollPayDialogDelete;