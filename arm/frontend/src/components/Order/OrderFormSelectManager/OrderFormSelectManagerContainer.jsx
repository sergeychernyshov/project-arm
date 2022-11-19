import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormSelectManager from './OrderFormSelectManager';
import Info from '../../common/Info';

import { fetchOrderFormSelectManager } from './order-form-select-manager-action';

class OrderFormSelectManagerContainer extends Component {
    componentDidMount() {
        const { fetchOrderFormSelectManager } = this.props;

        fetchOrderFormSelectManager();
    }

    render() {
        const { managerList, error, value, handleChange, errorValidation} = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        return (
            <OrderFormSelectManager
                managerList={managerList}
                value={value}
                handleChange={handleChange}
                errorValidation={errorValidation}
            />
        );
    }
}

const mapStateToProps = ({ orderFormSelectManager: { managerList, loading, error } }) => {
    return {
        managerList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchOrderFormSelectManager,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormSelectManagerContainer);