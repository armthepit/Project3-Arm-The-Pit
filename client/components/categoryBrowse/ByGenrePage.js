import React from 'react';
import ByGenreList from './ByGenreList';
import { connect } from 'react-redux';
import { showGenres } from '../../actions/browse';

class ByGenrePage extends React.Component {
    componentDidMount() {
        this.props.showGenres();
    }

    render() {
        return ( < div >
            < h1 > Browse By Genre < /h1>

            < ByGenreList genres = { this.props.genres }
            /> < /div>
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
