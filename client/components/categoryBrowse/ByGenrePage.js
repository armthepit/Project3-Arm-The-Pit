import React from 'react';
import ByGenreList from './ByGenreList';
import { connect } from 'react-redux';
import { showGenres } from '../../actions/browse';

class ByGenrePage extends React.Component {
    componentDidMount() {
        this.props.showGenres();
    }

    render() {
        return ( 
            < div >
                <h1 className="text-center">Arm The Pit</h1>
                <h2 className="text-center">Browse Artist By Genre</h2>
                < ByGenreList genres = { this.props.genres } /> 
            < /div>
        );
    }
}

ByGenrePage.propTypes = {
    genres: React.PropTypes.array.isRequired,
    showGenres: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, { showGenres })(ByGenrePage);
