import {
    PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL,
    PRODUCT_SHOES_GET_BY_ID,
    PRODUCT_STYLES_FETCH_ALL_SUCCESSFUL,
} from "./actionTypes"
import { toast } from "react-toastify"

const access_token = localStorage.getItem("user")

export default class ProductAction {
    static fetchAll({ size, page, name }) {
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
                const res = await fetch(url, {
                    headers: { access_token },
                })
                const shoes = await res.json()
                dispatch({
                    type: PRODUCT_SHOES_FETCH_ALL_SUCCESSFUL,
                    payload: shoes,
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
    static deleteById(id) {
        return async (dispatch) => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + `/admin/products/${id}`,
                    {
                        method: "DELETE",
                        headers: { access_token },
                    }
                )
                const resObj = await res.json()
                if (!res.ok) {
                    throw { message: resObj.message }
                }
                toast.success("Successfuly deleted product")
                dispatch(this.fetchAll({ page: 1, size: 4 }))
            } catch (err) {
                toast.error(err.message)
                console.log(err)
            }
        }
    }
    static getById(id) {
        return async (dispatch) => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + `/admin/products/${id}`,
                    {
                        headers: { access_token },
                    }
                )
                const resObj = await res.json()
                if (!res.ok) throw { message: resObj.message }
                dispatch({ type: PRODUCT_SHOES_GET_BY_ID, payload: resObj })
            } catch (err) {
                console.log(err)
            }
        }
    }
    static fetchAllStyles() {
        let url = import.meta.env.VITE_BASE_URL + "/admin/styles?"
        return async (dispatch) => {
            try {
                const res = await fetch(url, {
                    headers: { access_token },
                })
                const styles = await res.json()
                dispatch({
                    type: PRODUCT_STYLES_FETCH_ALL_SUCCESSFUL,
                    payload: styles,
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
