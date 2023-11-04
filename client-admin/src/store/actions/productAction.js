import { PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL } from "./actionTypes"

export default class ProductAction {
    static fetchAll() {
        return async (dispatch) => {
            try {
                const res = await fetch(import.meta.env.VITE_BASE_URL + '/admin/products', 
                    
                )
                const shoes = await res.json()
                console.log(shoes)
                dispatch({type: PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL, payload: shoes})
            } catch (err) {
                console.log(err)
            }
        }
    }
}