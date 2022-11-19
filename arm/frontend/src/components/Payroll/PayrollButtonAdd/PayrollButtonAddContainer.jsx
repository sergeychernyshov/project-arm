import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PayrollButtonAdd from './PayrollButtonAdd';
import PayrollForm from '../PayrollForm';

import { modalOpen } from '../../common/Modal/modal-action';
import { submitPayrollFormCreate } from '../PayrollForm/payroll-form-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalOpen: () => modalOpen({
            title: 'Добавление расчётного листа',
            body: <PayrollForm handler={submitPayrollFormCreate} />
        })
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(PayrollButtonAdd);