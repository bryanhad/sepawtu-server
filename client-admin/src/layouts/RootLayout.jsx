import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideNav from "../components/SideNav"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import UserAction from "../store/actions/userAction"
import logoutAlert from "../helper/logoutAlert"

export default function RootLayout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                dispatch(await UserAction.getUserInfo())
            } catch (err) {
                navigate('/login')
            }
        }
        fetchUser()
    }, [dispatch, navigate])

    function handleLogout() {
        logoutAlert(navigate)
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <NavBar className="lg:hidden" />
            <SideNav className="hidden lg:flex flex-[1]" logoutHandler={handleLogout}/>
            <main className="flex-[1] lg:flex-[4] p-4 bg-slate-200 flex flex-col gap-4">
                <Outlet />
            </main>
        </div>
    )
}
