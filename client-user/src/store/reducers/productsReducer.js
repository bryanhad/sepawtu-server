import {
    PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL,
    PRODUCTS_SHOES_FETCH_SUCCESSFUL,
} from "../actions/products/actionTypes"

const INITIAL_STATE = {
    shoes: [],
    shoesFiltered: [],
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PRODUCTS_SHOES_FETCH_SUCCESSFUL:
            return { ...state, shoes: action.payload }
        case PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL:
            return { ...state, shoesFiltered: action.payload }
        default:
            return state
    }
}
