import { connect } from 'react-redux';

import WagesInfo from './WagesInfo';

const mapStateToProps = ({ wagesList: { wagesList, loading, error } }) => {
    return {
        wagesList,
        loading,
        error
    };
};

export default connect(mapStateToProps)(WagesInfo);