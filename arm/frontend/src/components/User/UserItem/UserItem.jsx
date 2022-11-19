import React from 'react';
import { Link } from 'react-router-dom';

import './user-item.css';

const UserItem = ({ userItem: { first_name, last_name, role, email }, modalOpenEdit, modalOpenDelete }) => {
    const roleList = {
        'manager': 'Менеджер',
        'admin': 'Администратор'
    };

    return (
        <div className="user_item__layout">
            <div>
                <div>Имя: {first_name}</div>
                <div>Фамилия: {last_name}</div>
            </div>

            <div>
                <div>Эл. почта: {email}</div>
                <div>Роль: {roleList[role]}</div>
            </div>

            <div className="user_item__action">
                <div><Link to="#" onClick={modalOpenEdit}>Редактировать</Link></div>
                <div><Link to="#" onClick={modalOpenDelete}>Удалить</Link></div>
            </div>
        </div>
    );
};

export default UserItem;