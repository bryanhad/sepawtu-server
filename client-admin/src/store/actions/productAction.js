import { PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL } from "./actionTypes"

export default class ProductAction {
    static fetchAll({size, page, name}) {
        let url = import.meta.env.VITE_BASE_URL + "/admin/products?"
        if (size) {
            url += url.charAt(url.length - 1) === "?" ? "" : "&"
            url += `size=${size}`
        }
        if (page) {
            url += url.charAt(url.length - 1) === "?" ? "" : "&"
            url += `page=${page}`
        }
        if (name) {
            url += url.charAt(url.length - 1) === "?" ? "" : "&"
            url += `name=${name}`
        }
        return async (dispatch) => {
            try {
                const access_token = localStorage.getItem("user")

                const res = await fetch(url, {
                    headers: { access_token },
                })
                const shoes = await res.json()
                console.log(shoes)
                dispatch({
                    type: PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL,
                    payload: shoes,
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
