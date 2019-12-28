import React, {Component} from 'react'
import {Route} from "react-router-dom";
import MoviePanel from './MoviePanel';
import MovieDetails from './MovieDetails'
import '../styles/stylesheet.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.base_url = 'https://api.themoviedb.org/3/discover/movie?api_key=';
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.startLoadingMovies(this.base_url)
            .then(() => {
                this.setState({
                    loading:false
                });
            });
    }

    render() {

        return (
            <div>
                <Route exact path='/' render={
                    ({history}) => {
                        return <MoviePanel  {...this.props}/>
                    }
                }/>

                <Route path='/movie/:id' render={(params) => {
                    return <MovieDetails loading={this.state.loading} {...this.props} {...params}/>
                }}/>
            </div>
        )

    }

}

export default Main;
