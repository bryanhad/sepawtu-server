import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar/>
            <main className={`flex-[1] w-full`}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
