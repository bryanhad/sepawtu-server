import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar/>
            <main className={`flex-[1] w-full max-w-[1280px] mx-auto`}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
