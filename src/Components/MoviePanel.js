import React, {Component} from 'react';
import Movie from "./Movie";

class MoviePanel extends Component {

    render() {
        const movies = this.props.movies;
        return (
            movies.map((movie, idx) => <Movie key={idx} movie={movies[idx]}/>)
        )
    }
}

export default MoviePanel;
