import React, {Component} from 'react';
import Movie from "./Movie";

class MoviePanel extends Component {

    render() {
        const movies = this.props.movies;
        return (
            <div>
                <h1>Movies App</h1>
                <div className='panel-page'>
                    <div className='search-bar'>
                        <input type='text' className='search-text' placeholder='Search'/>
                        <a href="#">
                            <i className="material-icons search-btn">
                                search
                            </i>
                        </a>
                    </div>
                    <div className='panel'>
                        {movies.map((movie, idx) => <Movie key={idx} movie={movies[idx]}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviePanel;
