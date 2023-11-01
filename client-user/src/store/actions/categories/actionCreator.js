import { CATEGORIES_FETCH_ALL, CATEGORIES_GENDERS_FETCH_SUCCESSFUL, CATEGORIES_STYLES_FETCH_SUCCESSFUL } from "./actionType"

export default class CategoriesAction {
    static fetchStyles() {
        return async (dispatch) => {
            try {
                const styles = fetch('http://localhost:3000/styles')
                dispatch({type: CATEGORIES_STYLES_FETCH_SUCCESSFUL, payload: styles})
            } catch (err) {
                throw new Error(err)
            }
        }
    }
    static fetchGenders() {
        return async (dispatch) => {
            try {
                const res = await fetch('http://localhost:3000/genders')
                const genders = await res.json()
                dispatch({type: CATEGORIES_GENDERS_FETCH_SUCCESSFUL, payload: genders})
            } catch (err) {
                throw new Error(err)
            }
        }
    }
    static fetchAll() {
        return async (dispatch) => {
            try {
                const BASE_URL = 'http://localhost:3000'
                const endPoints = ['/genders', '/styles']
                const promises = endPoints.map(endPoint => fetch(`${BASE_URL}${endPoint}`))
                const [res1, res2] = await Promise.all(promises)
                const [genders, styles] = await Promise.all([res1.json(), res2.json()])
                dispatch({type: CATEGORIES_FETCH_ALL, payload: {genders, styles}})
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}