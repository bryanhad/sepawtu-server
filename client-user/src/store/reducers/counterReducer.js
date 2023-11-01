import {
    COUNTER_COUNT_DECREMENT,
    COUNTER_COUNT_INCREMENT,
} from "../actions/counter/actionType"

const INITIAL_STATE = {
    count: 0,
}

export default function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case COUNTER_COUNT_INCREMENT:
            return { count: state.count + action.payload }
        case COUNTER_COUNT_DECREMENT:
            return { count: state.count - action.payload }
        default:
            return state
    }
}
