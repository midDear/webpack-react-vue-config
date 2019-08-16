import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import app from '../page/appActions'
import todo from '../page/todo/actions'
import counter from '../page/counter/actions'

const logger = createLogger()
const rootReducer = combineReducers({app,todo,counter})
// export default createStore(rootReducer ,applyMiddleware(thunk,logger))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
export default createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, logger))
)