import { USER_FETCH_ALL_SUCCESSFUL, USER_GET_INFO, USER_LOGIN_SUCCESSFUL } from "../actions/actionTypes"

const INITIAL_STATE = {
    info: {},
    users: []
}

export default function userReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case USER_LOGIN_SUCCESSFUL: return {...state, info: action.payload}
        case USER_GET_INFO: return {...state, info: action.payload}
        case USER_FETCH_ALL_SUCCESSFUL: return {...state, users: action.payload}
        default: return state
    }
}