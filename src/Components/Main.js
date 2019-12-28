import React, {Component} from 'react'
import {Route} from "react-router-dom";
import MoviePanel from './MoviePanel';
import MovieDetails from './MovieDetails'
import '../styles/stylesheet.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.startLoadingMovies(this.props.page)
            .then(() => {
                this.props.changePage();
                this.setState({
                    loading: false
                });
            });
    }

    render() {

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
