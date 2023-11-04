import { USER_GET_INFO, USER_LOGIN_SUCCESSFUL } from "../actions/actionTypes"

const INITIAL_STATE = {
    info: {}
}

export default function userReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case USER_LOGIN_SUCCESSFUL: return {info: action.payload}
        case USER_GET_INFO: return {info: action.payload}
        default: return state
    }
}