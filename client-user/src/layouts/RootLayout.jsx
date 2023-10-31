import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {

    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar className='mb-5 fixed top-0 z-[100]' />
            <main className={`flex-[1] w-full mt-[75px]`}>
                <Outlet />
            </main>
            <Footer className='mt-12'/>
        </div>
    )
}
