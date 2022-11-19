import React from 'react';

import './user-button-add.css';

const UserButtonAdd = ({ modalOpen }) => {
    return (
        <div className="user_button_add__layout">
            <button className="user_button_add__button" onClick={modalOpen}>Добавить пользователя</button>
        </div>
    );
};

export default UserButtonAdd;