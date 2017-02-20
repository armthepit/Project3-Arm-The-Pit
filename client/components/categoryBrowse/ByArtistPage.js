import React from 'react';
import ByArtistList from './ByArtistList';
import { connect } from 'react-redux';
import { showArtists } from '../../actions/browse';
import startCase from 'lodash/startCase';

class ByArtistPage extends React.Component {
    componentDidMount() {
        this.props.showArtists();
    }

    render() {
        const browse = this.props.params.browseId;
        const search = startCase(this.props.params.searchId);
        return ( 
            < div >
                <h1 className="text-center">Arm The Pit</h1>
                <h2 className="text-center"> { search }</h2>
                <div>
                    < ByArtistList artists = { this.props.artists } />
                </div>     
            < /div>
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
