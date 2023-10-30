import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
        <nav className="w-full">
            <div className={`w-full max-w-[1280px] mx-auto flex justify-between`}>
                <h1>LOGO</h1>
                <div>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                </div>
            </div>
        </nav>
        <main className={`flex-[1] w-full max-w-[1280px] mx-auto`}>
            <Outlet/>
        </main>
        <footer className="flex flex-col">
            <div className="bg-black">
                <section className={`max-w-[1280px] w-full mx-auto flex justify-between text-white p-4`}>
                    <span className="flex items-center gap-4">
                        <img src="https://flagsapi.com/ID/flat/32.png" alt="indonesian flag"/>
                        <p className="font-semibold">ID</p>
                    </span>
                    <p>&copy;2023 Sepawtu</p>
                </section>
            </div>
        </footer>
    </div>
    )
}
