import React, {Component} from 'react';
import Movie from "./Movie";

class MoviePanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false
        }
    }

    render() {
        const movies = this.props.movies;
        return (
            <div>
                <a href='https://www.themoviedb.org/' target='_blank'>
                    <img style={{
                        width: '80px',
                        height: '80px',
                        float: 'right'
                    }}
                         src='https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png'/>
                </a>
                <h1>Movies App</h1>
                <div className='panel-page'>
                    <div className='search-bar'>
                        <input type='text' className='search-text' placeholder='Search'
                               onKeyUp={(e) => {
                                   const search_value = e.target.value;
                                   if (search_value !== '') {
                                       this.props.searchMovies(search_value).then(() => {
                                           this.setState({
                                               search: true
                                           })
                                       });
                                   }
                               }}/>
                        <a href="#">
                            <i className="material-icons search-btn">
                                search
                            </i>
                        </a>
                    </div>
                    <div className='panel'>
                        {movies.map((movie, idx) => {
                            return (movie.poster_path ? <Movie key={idx} movie={movies[idx]}/> : null);
                        })}
                    </div>
                    {
                        this.state.search ? null :
                            <button className='btn-more'
                                    onClick={() => {
                                        this.props.startLoadingMovies(this.props.page)
                                            .then(() => {
                                                this.props.changePage();
                                            });
                                    }}
                            >Show More
                            </button>
                    }
                </div>
            </div>
        )
    }
}

export default MoviePanel;
