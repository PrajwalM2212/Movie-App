import React, { Component } from 'react'

class MovieDetails extends Component {

    render() {
        const loading = this.props.loading;
        if (loading) {
            return (<div>...Loading</div>)
        } else {
            const movie_id = Number(this.props.match.params.id);
            const movies = this.props.movies;
            const movie = movies.find((movie) => movie.id === movie_id)
            const backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            console.log(movie);
            return (
                <div className='detail-panel' 
                style={{
                    backgroundImage: `url(${backdrop_path})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100vh',
                }}>
                    <div style={{
                        flex: '1'
                    }}>
                    </div>
                    <div className='details'>
                        <div>
                            <h2>{movie.title}</h2>
                        </div>
                        <div>overview: {movie.overview}</div>
                        <div>vote_average: {movie.vote_average}</div>
                        <div>release_date: {movie.release_date}</div>
                    </div >
                </div >
            );

        }
    }

}

export default MovieDetails;
