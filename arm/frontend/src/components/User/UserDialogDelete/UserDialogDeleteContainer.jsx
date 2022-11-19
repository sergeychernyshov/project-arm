import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserDialogDelete from './UserDialogDelete';

const mapStateToProps = ({ userForm: { loading, error } }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDialogDelete);