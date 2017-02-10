import React from 'react';
import ByArtistList from './ByArtistList';
import { connect } from 'react-redux';
import { showArtists } from '../../actions/browse';

class ByArtistPage extends React.Component {
    componentDidMount() {
        this.props.showArtists();
    }

    render() {
        return ( < div >
            < h1 > Artist < /h1>

            < ByArtistList artists = { this.props.artists }
            /> < /div>
        );
    }
}

ByArtistPage.propTypes = {
    artists: React.PropTypes.array.isRequired,
    showArtists: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, { showArtists })(ByArtistPage);
