import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideNav from "../components/SideNav"

export default function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <NavBar className="lg:hidden" />
            <SideNav className="hidden lg:flex flex-[1]" />
            <main className="flex-[1] lg:flex-[4] p-4 bg-slate-200 flex flex-col gap-4">
                <Outlet />
            </main>
        </div>
    )
}
