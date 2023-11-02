import { CATEGORIES_STYLES_FETCH_SUCCESSFUL } from "./actionType"

export default class CategoriesAction {
    static fetchStyles() {
        return async (dispatch) => {
            try {
                const res = await fetch(import.meta.env.VITE_BASE_URL + '/styles')
                const styles = await res.json()
                dispatch({type: CATEGORIES_STYLES_FETCH_SUCCESSFUL, payload: styles})
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}