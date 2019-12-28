import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Movie extends Component {
    render() {
        const movie = this.props.movie;
        const id = movie.id;
        return (
            <Link to={`movie/${id}`}>
                <div className='movie'>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
                </div>
            </Link>
        );
    }

}

export default Movie;
