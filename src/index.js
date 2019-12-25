import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './redux/reducer'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './Components/App'
import React from 'react'


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
