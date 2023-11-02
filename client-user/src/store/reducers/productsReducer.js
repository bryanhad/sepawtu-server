import {
    PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL,
    PRODUCTS_SHOES_FETCH_SUCCESSFUL,
} from "../actions/products/actionTypes"

const INITIAL_STATE = {
    currentPage: localStorage.getItem('currentPage') ||  1,
    totalItems: 0,
    totalPages: 0,
    shoes: [],
    shoesFiltered: [],
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PRODUCTS_SHOES_FETCH_SUCCESSFUL:
            return { ...state, shoes: action.payload }
        case PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL:
            return {
                ...state,
                ...action.payload.pagination,
                shoesFiltered: action.payload.data
            }
        default:
            return state
    }
}
