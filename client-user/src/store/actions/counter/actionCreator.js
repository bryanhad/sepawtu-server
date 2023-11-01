import { COUNTER_COUNT_DECREMENT, COUNTER_COUNT_INCREMENT } from "./actionType"

export default class CounterAction {
    static increment(payload) {
        return {type: COUNTER_COUNT_INCREMENT, payload}
    }
    static decrement(payload) {
        return {type: COUNTER_COUNT_DECREMENT, payload}
    }
}