import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderDialogDelete from './OrderDialogDelete';

const mapStateToProps = ({ orderForm: { loading, error } }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDialogDelete);