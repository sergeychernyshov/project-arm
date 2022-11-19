import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PayrollFilter from './PayrollFilter';

import { fetchPayrollList } from '../PayrollList/payroll-list-action';
import { setPayrollFilter } from './payroll-filter-action';

const mapStateToProps = ({ payrollFilter }) => {
    return {
        payrollFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchPayrollList,
        setPayrollFilter
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PayrollFilter);