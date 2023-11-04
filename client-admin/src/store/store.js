import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import productReducer from './reducers/productReducer'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({product: productReducer, user: userReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store