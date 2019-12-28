import * as actions from '../redux/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Main from './Main'

function mapStateToProps(state) {
    return {
        movies: state.movies,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
