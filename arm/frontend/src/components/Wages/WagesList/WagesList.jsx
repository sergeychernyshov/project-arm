import React from 'react';

import Info from '../../common/Info';
import WagesItem from '../WagesItem';

import './wages-list.css';

const WagesList = (props) => {
    const { wagesList, loading, error, wagesFilter: { date_from, date_to, manager} } = props;
    
    if (error) {
        return <Info
            type='error'
        />;
    }

    if (!date_from || !date_to || !manager) {
        return <Info
            value="Заполните фильтр."
        />;
    }

    if (!loading && Object.keys(wagesList).length === 0 && date_from && date_to && manager) {
        return <Info
            value="Заявок за данный период не найдено!"
        />;
    }

    return (
        <div className="wages_list__layout">
            {
                wagesList.map((order) => {
                    return <WagesItem
                        key={order._id}
                        order={order}
                    />
                })
            } 
       </div>
    );
}

export default WagesList;