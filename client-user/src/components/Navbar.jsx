import { GiConverseShoe } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { GrMenu } from "react-icons/gr"
import { IoClose } from "react-icons/io5"
import { useState } from "react"

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    const links = [
        {
            name: "Men",
            to: "men",
        },
        {
            name: "Women",
            to: "women",
        },
        {
            name: "Kids",
            to: "kids",
        },
    ]

    return (
        <nav className="w-full p-2 relative">
            <div
                className={`w-full max-w-[1280px] mx-auto flex justify-between`}
            >
                <div className="flex">
                    <span className="flex text-2xl items-center font-extrabold">
                        <h1>Sepawtu</h1>
                        <GiConverseShoe className="pt-1" />
                    </span>
                    <div className="ml-4 flex gap-4 font-semibold">
                        {links.map((link, i) => (
                            <NavLink to={link.to} className='flex items-end' key={i}>
                                <p>
                                {link.name}
                                </p>
                            </NavLink>
                        ))}
                    </div>
                </div>

                <button
                    className="md:hidden relative z-[100] cursor-pointer text-[35px]"
                    onClick={() => setNavOpen((isOpen) => !isOpen)}
                >
                    {navOpen ? <IoClose /> : <GrMenu />}
                </button>

                <div className="hidden md:flex">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                </div>

                {/* burger menu */}
                <nav
                    className={`fixed h-full top-0 min-w-[70%] border-l-[1px] bg-slate-200/50 ${
                        !navOpen
                            ? "right-0 translate-x-[100%] duration-300 ease-in-out"
                            : "right-0 translate-x-[0%] duration-300 ease-in-out"
                    }`}
                >
                    a
                </nav>
            </div>
        </nav>
    )
}
