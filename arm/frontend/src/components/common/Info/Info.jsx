import React from 'react';

import './info.css';

const _getTypeInfo = (type) => {
    let result;

    switch (type) {
        case 'loading':
            result = 'Загрузка...';

            break;
        case 'error':
            result = 'Ошибка';

            break;
        case 'not-found':
            result = 'Страница не найдена!';

            break;
        default:
    }

    return result;

};

const Info = ({ type, value }) => {
    return (
        <div className="info">
            <h3>{value || _getTypeInfo(type)}</h3>
        </div>
    );
};

export default Info;