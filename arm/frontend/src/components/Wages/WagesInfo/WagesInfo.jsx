import React from 'react';

import './wages-info.css';

const WagesInfo = (props) => {
    const { wagesList } = props;

    const count = wagesList.length;

    if (!count) {
        return null;
    }

    let wages = 0;

    for (var wagesItem of wagesList) {
        wages += wagesItem.manager_share || 0;
    }

    return (
        <div className="wages_info__layout">
            Доля менеджера: {wages} / Заявок: {count}
        </div>
    );
}

export default WagesInfo;