import { PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL } from "./actionTypes"

export default class ProductsAction {
    static fetchShoes({gender, page, slug, images}) {
        return async (dispatch) => {
            try {
                let url = import.meta.env.VITE_BASE_URL + '/products?'
                if (gender) {
                    url += url.charAt(url.length - 1) === '?' 
                        ? '' : '&'
                    url += `gender=${gender}`
                }
                if (page) {
                    url += url.charAt(url.length - 1) === '?' 
                        ? '' : '&'
                    url += `page=${page}`
                }
                if (slug) {
                    url += url.charAt(url.length - 1) === '?' 
                        ? '' : '&'
                    url += `slug=${slug}`
                }
                if (images) {
                    url += url.charAt(url.length - 1) === '?' 
                        ? '' : '&'
                    url += `images=true`
                }

                const res = await fetch(url)
                const { data, ...pagination } = await res.json()
                dispatch({
                    type: PRODUCTS_SHOES_FETCH_BY_FILTER_SUCCESSFUL,
                    payload: {
                        data,
                        pagination: {
                            ...pagination,
                        },
                    },
                })
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}
