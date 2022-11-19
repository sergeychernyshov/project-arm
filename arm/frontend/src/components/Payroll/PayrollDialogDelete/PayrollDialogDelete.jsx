import React from 'react';

import './payroll-dialog-delete.css';

const UserDialogDelete = ({ loading, error, handler, payroll: { first_name, last_name } }) => {

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
            <h3>Удалить расчётный лист ({first_name} {last_name})?</h3>
    
            <input className="payroll-dialog-delete__input payroll-dialog-delete__button" id="submit" type="submit" value={renderSubmitValue} />
        </form>
    );
}

export default UserDialogDelete;