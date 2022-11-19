import { connect } from 'react-redux';

import OrderFreeCarList from './OrderFreeCarList';

const mapStateToProps = ({ orderList: { orderListAll }}) => {
    return {
        orderListAll
    };
};

export default connect(mapStateToProps)(OrderFreeCarList);