import React from 'react';

import './payroll-button-add.css';

const PayrollButtonAdd = ({ modalOpen }) => {
    return (
        <div className="payroll_button_add__layout">
            <button className="payroll_button_add__button" onClick={modalOpen}>Добавить расчётный лист</button>
        </div>
    );
};

export default PayrollButtonAdd;