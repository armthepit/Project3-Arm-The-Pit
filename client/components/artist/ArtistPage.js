import React from 'react';
import ArtistList from './ArtistList';
import { connect } from 'react-redux';
import { showArtists } from '../../actions/artist';

class ArtistPage extends React.Component {
    componentDidMount() {
        this.props.showArtists();
    }

    render() {
        return ( < div >
            < h1 > Browse By Artist < /h1>

            < ArtistList artists = { this.props.artists }
            /> < /div>
        );
    }
}

ArtistPage.propTypes = {
    artists: React.PropTypes.array.isRequired,
    showArtists: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, { showArtists })(ArtistPage);
