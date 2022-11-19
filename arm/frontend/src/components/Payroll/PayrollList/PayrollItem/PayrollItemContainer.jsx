import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PayrollItem from './PayrollItem';
import PayrollPayDialogDelete from './PayrollPayDialogDelete';

import { modalOpen } from '../../../common/Modal/modal-action';
import { submitPayrollFormUpdate } from '../../PayrollForm/payroll-form-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalOpenDeletePay: (payroll, pay) => modalOpen({
            title: 'Удаление платежа',
            body: <PayrollPayDialogDelete
                pay={pay}
                payroll={payroll}
                handler={() => submitPayrollFormUpdate(payroll)}
            />
        })
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(PayrollItem);