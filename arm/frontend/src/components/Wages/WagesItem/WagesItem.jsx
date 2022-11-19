import React from 'react';
import moment from 'moment';

import './wages-item.css';

const WagesItem = (props) => {
    const { delivery, order, manager_share } = props.order;

    return (
        <div className="wages_item__layout">
            <div className="wages_item__delivery">{moment(delivery).format('DD-MM-YYYY')}</div>
            <div className="wages_item__account">{order || 'заявка'}</div>
            <div className="wages_item__manager_share">{manager_share || 'доля'}</div>
        </div>
    );
}

export default WagesItem;