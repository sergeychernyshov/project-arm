import React from 'react';

import './order-form-select-manager.css';

const OrderFormSelectManager = ({ managerList, value, handleChange, errorValidation}) => {
    let layoutClassName = '';
    let inputClassName = 'order_form_select_manager';

    if (errorValidation) {
        layoutClassName += 'order_form_select_manager__layout_error';
        inputClassName += ' order_form_select_manager__error';
    }

    const renderError = (errorValidation) &&
        <span className="order_form_select_manager__message_error">{errorValidation}</span>

    return (
        <div className={layoutClassName}>
            <label htmlFor="manager">Менеджер</label>
            <select onChange={handleChange} value={value} className={inputClassName} id="manager" name="manager">
                <option></option>
                {managerList.map(({ _id, first_name, last_name }) => <option key={_id} value={_id}>{last_name} {first_name}</option>)}
            </select>
            {renderError}
        </div>
    );
};

export default OrderFormSelectManager;