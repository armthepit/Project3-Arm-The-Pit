import React from 'react';
import ByStateList from './ByStateList';
import { connect } from 'react-redux';
import { showStates } from '../../actions/browse';

class ByStatePage extends React.Component {
    componentDidMount() {
        this.props.showStates();
    }

    render() {
        return ( < div >
            < h1 > Browse By State < /h1>

            < ByStateList states = { this.props.states }
            /> < /div>
        );
    }
}

ByStatePage.propTypes = {
    states: React.PropTypes.array.isRequired,
    showStates: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        states: state.states
    }
}

export default connect(mapStateToProps, { showStates })(ByStatePage);
