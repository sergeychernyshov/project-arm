import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFilter from './OrderFilter';

import { fetchOrderList } from '../OrderList/order-list-action';
import { setOrderFilter } from './order-filter-action';

const mapStateToProps = ({ orderFilter }) => {
    return {
        orderFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchOrderList,
        setOrderFilter
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);