import {combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from './reducers/categoriesReducer'
import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store