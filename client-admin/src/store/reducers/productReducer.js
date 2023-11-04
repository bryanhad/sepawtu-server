import { PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL } from "../actions/actionTypes"

const INITIAL_STATE = {
    shoes: []
}

export default function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL: return {
            ...state, shoes: action.payload
        }
        default: return state
    }
}