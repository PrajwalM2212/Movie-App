import config from '../environment/config'

export function startLoadingMovies(base_url) {
    const extension_url = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const final_url = base_url + config.api_key + extension_url;
    return (dispatch) => {

        fetch(final_url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        const results = JSON.parse(JSON.stringify(data)).results;
                        dispatch(load_movies(results))
                    })
            })
    }
}

export function load_movies(movies) {
    return {
        type: 'LOAD_MOVIES',
        movies
    }
}
