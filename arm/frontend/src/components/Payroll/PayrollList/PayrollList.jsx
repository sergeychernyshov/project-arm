import React, { PureComponent } from 'react';

import Info from '../../common/Info';
import PayrollItem from './PayrollItem';

import './payroll-list.css';

class PayrollList extends PureComponent {
    componentDidMount() {
        this.props.fetchPayrollList();
    }

    render() {
        const { payrollList, loading, error, modalOpenEdit, modalOpenDelete} = this.props;
        
        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!loading && Object.keys(payrollList).length === 0) {
            return <Info
                value="Расчётных листов за данный период не найдено!"
            />;
        }

        return (
            <div className="payroll_list__layout">
                {
                    payrollList.map((payroll) => {
                        return <PayrollItem
                            key={payroll._id}
                            payroll={payroll}
                            modalOpenEdit={() => modalOpenEdit(payroll)}
                            modalOpenDelete={() => modalOpenDelete(payroll)}
                        />
                    })
                }
            </div>
        );
    }
}

export default PayrollList;