import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderForm from './OrderForm';

const mapStateToProps = ({ orderForm: { loading, error } }) => {
    return {
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { handler, modalClose }) => {
    return bindActionCreators({
        handler,
        modalClose
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);