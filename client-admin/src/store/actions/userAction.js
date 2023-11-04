import { toast } from "react-toastify"
import { USER_GET_INFO, USER_LOGIN_SUCCESSFUL } from "./actionTypes"

export default class UserAction {
    static async login(formObj) {
        try {
            const res = await fetch(
                import.meta.env.VITE_BASE_URL + "/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formObj),
                }
            )
            if (!res.ok) {
                throw data
            }
            const data = await res.json()
            localStorage.setItem("user", data.access_token)
            toast.success(data.message)
            return async (dispatch) => {
                dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data.user })
            }
        } catch (err) {
            throw { message: err.message }
        }
    }

    static async getUserInfo() {
        const access_token = localStorage.getItem("user")
        try {
            if (!access_token) throw { message: "Please login first" }
            const res = await fetch(
                import.meta.env.VITE_BASE_URL + "/user-info",
                {
                    headers: { access_token }
                }
            )
            if (!res.ok) {
                const err = await res.json()
                throw { message: err.message }
            }
            const userInfo = await res.json()
            return (dispatch) => {
                dispatch({ type: USER_GET_INFO, payload: userInfo })
            }
        } catch (err) {
            toast.error(err.message)
            throw { message: err.message }
        }
    }
}
