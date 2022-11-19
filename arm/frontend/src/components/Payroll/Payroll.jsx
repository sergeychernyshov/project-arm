import React from 'react';

import PayrollButtonAdd from './PayrollButtonAdd';
import PayrollList from './PayrollList';
import PayrollFilter from './PayrollFilter';

import './payroll.css';

const Payroll = () => {
    return (
        <>
            <div className="payroll__control">
                <PayrollButtonAdd />
                <PayrollFilter />
                <div></div>
            </div>
            <PayrollList />
        </>
    );
};

export default Payroll;