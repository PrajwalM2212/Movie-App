import React, {Component} from 'react'

class Movie extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <div>
                {movie.title}
            </div>);
    }

}

export default Movie;
