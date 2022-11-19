import { connect } from 'react-redux';

import OrderCount from './OrderCount';

const mapStateToProps = ({ orderList: { orderList }}) => {
    return {
        orderList
    };
};

export default connect(mapStateToProps)(OrderCount);