import React, {Component} from 'react'
import {Route} from "react-router-dom";
import MoviePanel from './MoviePanel'

class Main extends Component {
    constructor(props) {
        super(props);
        this.base_url = 'https://api.themoviedb.org/3/discover/movie?api_key='
    }

    componentDidMount() {
        this.props.startLoadingMovies(this.base_url);
    }

    render() {

        return (
            <div>
                <h1>Movies App</h1>
                <Route exact path='/' render={
                    ({history}) => {
                        return <MoviePanel  {...this.props}/>
                    }
                }/>
            </div>
        )

    }

}

export default Main;
