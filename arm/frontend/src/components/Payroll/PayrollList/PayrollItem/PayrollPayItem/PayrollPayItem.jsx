import React from 'react';
import moment from 'moment';

import Button from '../../../../common/Button';

import './payroll-pay-item.css'

const PayrollPayItem = ({ pay: { amount, date, payment }, modalOpenDeletePay }) => {
    const paymentList = {
        cash: 'Нал.',
        card: 'Карта'
    };
    
    return (
        <div className="payroll_pay_item__layout">
            <div className="payroll_pay_item__amount">
                {amount}
            </div>

            <div className="payroll_pay_item__date">
                {moment(date).format('DD-MM-YYYY')}
            </div>

            <div className="payroll_pay_item__payment">
                {paymentList[payment]}
            </div>

            <div className="payroll_pay_item__action">
                <Button
                    value="-"
                    onClick={modalOpenDeletePay}
                />
            </div>
        </div>
    );
}

export default PayrollPayItem;