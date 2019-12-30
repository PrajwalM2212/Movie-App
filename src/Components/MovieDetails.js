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
                        top: '0',
                        left: '0'
                    }}>
                    <a href='https://www.themoviedb.org/' target='_blank'>
                        <img style={{
                            width: '80px',
                            height: '80px',
                            float: 'right'
                        }}
                            src='https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png' />
                    </a>
                    <div style={{
                        flex: '1'
                    }}>
                    </div>
                    <div className='details'>
                        <div className='movie-card'>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                            <div className='overview'>{movie.overview}</div>
                            <div className='info'>
                                <div id='avg'>
                                    {movie.vote_average}
                                </div>
                                <div id='release'>
                                    {movie.release_date}
                                </div>
                            </div>
                        </div>
                    </div >
                </div>

            );

        }
    }

}

export default MovieDetails;
