import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducer/dataReducer'

let store = createStore(dataReducer, applyMiddleware(thunk))

export default store;