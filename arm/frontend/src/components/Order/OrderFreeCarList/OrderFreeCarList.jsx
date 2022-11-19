import React from 'react';

import './order-free-car-list.css';

const OrderFreeCarList = ({ orderListAll }) => {
    orderListAll = orderListAll || [];

    const carList = ['980', '979', '926', '166', '935', '170', '959', '766', '739', '782', '644', '408', '578', '650', '517', '417', '285', '220', '124', '596', '066', '862', 'Экс', '533'];

    const carListFree = carList.filter((car) => !orderListAll.find((order) => order.car_number === car && order.status === 'open'));

    const renderCarListFree = carListFree.map((car, index) => {
        if (index !== 0) {
            return (
                <span key={index}>
                    &nbsp;| {car}
                </span>
            );
        }

        return (
            <span key={index}>
                {car}
            </span>
        );
    });
    
    if (renderCarListFree.length === 0) {
        return (
            <div>
                Все машины в работе.
            </div>
        );
    }

    return (
        <div>
            Свободные машины: {renderCarListFree}
        </div>
    );

}

export default OrderFreeCarList;