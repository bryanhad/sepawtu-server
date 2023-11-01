import { PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL } from "./actionTypes";

export default class ProductsAction {
    static fetchShoesByGender(gender) {
        let genderId
        switch (gender) {
            case 'men': genderId = 1; break 
            case 'women': genderId = 2; break
            case 'kids': genderId = 3; break
            default: break
        }

        return async (dispatch) => {
            try {
                const res = await fetch(`http://localhost:3000/products?genderId=${genderId}`)
                const shoes = await res.json()
                dispatch({type: PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL, payload: shoes})
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}