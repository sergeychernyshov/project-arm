import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PayrollDialogDelete from './PayrollDialogDelete';

const mapStateToProps = ({ payrollForm: { loading, error } }) => {
    return {
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { handler }) => {
    return bindActionCreators({
        handler
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayrollDialogDelete);