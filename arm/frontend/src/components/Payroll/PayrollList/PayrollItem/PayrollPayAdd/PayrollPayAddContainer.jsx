import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PayrollPayAdd from './PayrollPayAdd';

import { submitPayrollFormUpdate } from '../../../PayrollForm/payroll-form-action';



const mapStateToProps = ({ payrollForm: { loading, error } }) => {
    return {
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        submitPayrollFormUpdate
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayrollPayAdd);