import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PayrollForm from './PayrollForm';

const mapStateToProps = ({ payrollForm: { loading, error }, payrollFilter: { date } }) => {
    return {
        loading,
        error,
        date
    };
};

const mapDispatchToProps = (dispatch, { handler }) => {
    return bindActionCreators({
        handler
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayrollForm);