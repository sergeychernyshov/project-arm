import { connect } from 'react-redux';

import OrderListPrint from './OrderListPrint'; 

const mapStateToProps = ({orderList: { orderList }}) => {
    return {
        orderList
    };
};

export default connect(mapStateToProps)(OrderListPrint);