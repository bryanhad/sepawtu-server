import { toast } from "react-toastify"
import {
    USER_FETCH_ALL_SUCCESSFUL,
    USER_GET_INFO,
    USER_LOGIN_SUCCESSFUL,
} from "./actionTypes"

const access_token = localStorage.getItem("user")

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
                    headers: { access_token },
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

    static fetchUsers() {
        return async (dispatch) => {
            try {
                const res = await fetch(
                    import.meta.env.VITE_BASE_URL + "/admin/users",
                    {
                        headers: { access_token },
                    }
                )
                const users = await res.json()
                dispatch({
                    type: USER_FETCH_ALL_SUCCESSFUL,
                    payload: users,
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    static async register(formObj) {
        try {
            const res = await fetch(
                import.meta.env.VITE_BASE_URL + "/admin/register",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        access_token,
                    },
                    body: JSON.stringify(formObj),
                }
            )
            const data = await res.json()
            if (!res.ok) {
                throw [...data]
            }
            toast.success(data.message)
            return (dispatch) => {
                dispatch(this.fetchUsers())
            }
        } catch (err) {
            toast.error(err.message || 'Please fill in the form correctly')
            throw [...err]
        }
    }
}
