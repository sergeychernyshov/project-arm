import React from 'react';

import WagesFilter from './WagesFilter';
import WagesInfo from './WagesInfo';
import WagesList from './WagesList';

const Wages = () => {
    return (
        <>
            <WagesFilter />
            <WagesInfo />
            <WagesList />
        </>
    );
}

export default Wages;