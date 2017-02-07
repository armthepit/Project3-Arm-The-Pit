import React from 'react';
import ByCountryList from './ByCountryList';
import { connect } from 'react-redux';
import { showCountries } from '../../actions/browse';

class ByCountryPage extends React.Component {
    componentDidMount() {
        this.props.showCountries();
    }

    render() {
        return ( < div >
            < h1 > Browse By Country < /h1>

            < ByCountryList countries = { this.props.countries }
            /> < /div>
        );
    }
}

ByCountryPage.propTypes = {
    countries: React.PropTypes.array.isRequired,
    showCountries: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps, { showCountries })(ByCountryPage);
