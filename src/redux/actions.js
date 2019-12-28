import config from '../environment/config'

const base_url = 'https://api.themoviedb.org/3/discover/movie?api_key=';

export function startLoadingMovies(page_offset) {
    const extension_url = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page_offset;
    const final_url = base_url + config.api_key + extension_url;
    return (dispatch) => {
        return fetch(final_url)
            .then((res) => {
                return res.json()
                    .then((data) => {
                        const results = JSON.parse(JSON.stringify(data)).results;
                        dispatch(load_movies(results))
                    })
            })
    }
}

export function searchMovies(query) {

    const final_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + config.api_key + `&language=en-US&query=${query}&page=1&include_adult=false`;

    return (dispatch) => {
        return fetch(final_url)
            .then((res) => {
                return res.json()
                    .then((data) => {
                        dispatch(search(JSON.parse(JSON.stringify(data)).results))
                    })
            })
    }

}

export function search(movies) {
    return {
        type: 'SEARCH',
        movies
    }
}

export function changePage() {
    return (dispatch) => {
        dispatch(change_page_offset());
    }
}

export function change_page_offset() {
    return {
        type: 'LOADED'
    }
}

export function load_movies(movies) {
    return {
        type: 'LOAD_MOVIES',
        movies
    }
}
