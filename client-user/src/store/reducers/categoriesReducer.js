import {
    CATEGORIES_STYLES_FETCH_SUCCESSFUL,
} from "../actions/categories/actionType"

const INITIAL_STATE = {
    styles: [],
}

export default function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CATEGORIES_STYLES_FETCH_SUCCESSFUL:
            return { styles: action.payload }
        default:
            return state
    }
}
