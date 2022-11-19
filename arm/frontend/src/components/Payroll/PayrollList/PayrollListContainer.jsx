import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PayrollList from './PayrollList';
import PayrollForm from '../PayrollForm';
import PayrollDialogDelete from '../PayrollDialogDelete';

import { fetchPayrollList } from './payroll-list-action';
import { submitPayrollFormUpdate, submitPayrollFormDelete } from '../PayrollForm/payroll-form-action';
import { modalOpen } from '../../common/Modal/modal-action';


const mapStateToProps = ({ payrollList: { payrollList, loading, error }}) => {
    return {
        payrollList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchPayrollList,
        modalOpenEdit: (payroll) => modalOpen({
            title: 'Редактирование пользователя',
            body: <PayrollForm
                payroll={payroll}
                handler={submitPayrollFormUpdate}
            />
        }),
        modalOpenDelete: (payroll) => modalOpen({
            title: 'Удаление расчётного листа',
            body: <PayrollDialogDelete
                payroll={payroll}
                handler={() => submitPayrollFormDelete(payroll._id)}
            />
        })
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayrollList);