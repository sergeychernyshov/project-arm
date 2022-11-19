import React from 'react';
import { Link } from 'react-router-dom';

import PayrollPayAdd from './PayrollPayAdd';
import PayrollPayItem from './PayrollPayItem';

import './payroll-item.css';

const PayrollItem = (props) => {
    const { payroll, modalOpenEdit, modalOpenDelete, modalOpenDeletePay } = props;

    const { first_name, last_name, wages, pay_list, note } = payroll;

    let paid = 0;

    for (var payItem of pay_list) {
        paid += payItem.amount || 0;
    }

    const residue = wages - paid;

    return (
        <div className="payroll_item__layout payroll_item__relevate">
            <div className="payroll_item__row">
                <div className="payroll_item__name">{last_name} {first_name}</div>
                <div>Зарплата: {wages}</div>
            </div>

            <PayrollPayAdd
                payroll = {payroll}
            />

            <div className="payroll_item__pay_list">
                {pay_list.map((pay, index) => <PayrollPayItem
                    pay={pay}
                    modalOpenDeletePay={() => {
                        payroll.pay_list.splice(index, 1);
                        
                        modalOpenDeletePay(payroll, pay)
                    }}
                    key={index}
                />)}

                { note && <div>Примечание: {note}</div>}
            </div>
            <div className="payroll_item__absolute">
                <div className="payroll_item__row">
                    <div>Выплачено: {paid}</div>
                    <div>Остаток: {residue}</div>
                </div>
                <div className="payroll_item__action">
                    <Link to="#" onClick={modalOpenEdit}>Редактировать</Link>
                    <Link to="#" onClick={modalOpenDelete}>Удалить</Link>
                </div>
            </div>
        </div>
    );
}

export default PayrollItem;