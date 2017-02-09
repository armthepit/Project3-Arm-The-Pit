import React from 'react';
import ArtistList from './ArtistList';
import { connect } from 'react-redux';
import { showArtist } from '../../actions/artist';

class ArtistPage extends React.Component {
    componentDidMount() {
        this.props.showArtist();
    }

    render() {
        return ( < div >
            < h1 > Browse By Artist < /h1>

            < ArtistList artist = { this.props.artist }
            /> < /div>
        );
    }
}

ArtistPage.propTypes = {
    artist: React.PropTypes.array.isRequired,
    showArtist: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        artist: state.artist
    }
}

export default connect(mapStateToProps, { showArtist })(ArtistPage);