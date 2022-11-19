import React from 'react';

import './user-dialog-delete.css';

const UserDialogDelete = ({ loading, user:  { first_name, last_name }, handler }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        handler();
    };

    const renderButton = (loading)
        ? <input className="user-dialog-delete__input user-dialog-delete__button" id="submit" type="submit" value="Загрузка..." />
        : <input className="user-dialog-delete__input user-dialog-delete__button" id="submit" type="submit" value="Удалить" />

    return (
        <form onSubmit={handleSubmit}>
            <h3>Удалить пользователя ({first_name} {last_name})?</h3>
    
            {renderButton}
        </form>
    );
}

export default UserDialogDelete;