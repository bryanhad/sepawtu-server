import { PRODUCT_SHOES_EDIT_BY_ID, PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL, PRODUCT_SHOES_GET_BY_ID, PRODUCT_STYLES_FETCH_ALL_SUCCESSFUL } from "../actions/actionTypes"

const INITIAL_STATE = {
    shoes: [],
    shoeDetail: {},
    styles: [],
    genders: [
        { id: "men", name: "Men" },
        { id: "women", name: "Women" },
        { id: "kids", name: "Kids" },
    ]
}

export default function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL: return {
            ...state, shoes: action.payload
        }
        case PRODUCT_SHOES_GET_BY_ID: return {
            ...state, shoeDetail: action.payload
        }
        case PRODUCT_STYLES_FETCH_ALL_SUCCESSFUL: return {
            ...state, styles: action.payload
        }
        case PRODUCT_SHOES_EDIT_BY_ID: return {
            ...state, shoeDetail: action.payload
        }
        default: return state
    }
}