import React from 'react';
import ByCountryList from './ByCountryList';
import { connect } from 'react-redux';
import { showCountries } from '../../actions/browse';

class ByCountryPage extends React.Component {
    componentDidMount() {
        this.props.showCountries();
    }

    render() {
        return ( 
            < div >
                <h1 className="text-center">Arm The Pit</h1>
                <h2 className="text-center">Browse Artists By Country</h2>
                <div>
                    < ByCountryList countries = { this.props.countries } />
                </div>     
            < /div>
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
