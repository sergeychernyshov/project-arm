import { connect } from 'react-redux';

import WagesList from './WagesList';

const mapStateToProps = ({ wagesList: { wagesList, loading, error }, wagesFilter }) => {
    return {
        wagesList,
        loading,
        error,
        wagesFilter
    };
};

export default connect(mapStateToProps)(WagesList);