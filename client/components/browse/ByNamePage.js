import React from 'react';
import ByNameList from './ByNameList';
import { connect } from 'react-redux';
import { showNames } from '../../actions/browse';

class ByNamePage extends React.Component {
    componentDidMount() {
        this.props.showNames();
    }

    render() {
        return ( < div >
            < h1 > Browse By Name < /h1>

            < ByNameList names = { this.props.names }
            /> < /div>
        );
    }
}

ByNamePage.propTypes = {
    names: React.PropTypes.array.isRequired,
    showNames: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        names: state.names
    }
}

export default connect(mapStateToProps, { showNames })(ByNamePage);
