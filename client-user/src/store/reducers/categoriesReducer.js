import {
    CATEGORIES_FETCH_ALL,
    CATEGORIES_GENDERS_FETCH_SUCCESSFUL,
    CATEGORIES_STYLES_FETCH_SUCCESSFUL,
} from "../actions/categories/actionType"

const INITIAL_STATE = {
    genders: [],
    styles: [],
}

export default function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CATEGORIES_STYLES_FETCH_SUCCESSFUL:
            return { ...state, styles: action.payload }
        case CATEGORIES_GENDERS_FETCH_SUCCESSFUL:
            return { ...state, genders: action.payload }
        case CATEGORIES_FETCH_ALL:
            return action.payload
        default:
            return state
    }
}
