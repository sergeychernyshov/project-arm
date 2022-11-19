import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WagesFilter from './WagesFilter';

import { fetchWagesList } from '../WagesList/wages-list-action';
import { setWagesFilter } from './wages-filter-action';

const mapStateToProps = ({ wagesFilter }) => {
    return {
        wagesFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWagesList,
        setWagesFilter
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WagesFilter);