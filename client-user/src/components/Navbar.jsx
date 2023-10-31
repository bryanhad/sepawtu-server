import { GiConverseShoe } from "react-icons/gi"
import { Link, NavLink } from "react-router-dom"
import { GrMenu } from "react-icons/gr"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import Container from "./Container"

export default function Navbar({ className }) {
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
        <nav
            className={`w-full h-[75px] flex items-center px-2 ${className} border-b-[1px] border-b-slate-100 bg-white`}
        >
            <Container className={`flex justify-between`}>
            <div className="flex">
                    <Link to='/' className="flex text-3xl items-center font-extrabold">
                        <h1>Sepawtu</h1>
                        <GiConverseShoe className="pt-2" />
                    </Link>
                    <div className="hidden md:flex ml-6 gap-4 font-semibold">
                        {links.map((link, i) => (
                            <NavLink
                                to={link.to}
                                className="flex items-end"
                                key={i}
                            >
                                <p>{link.name}</p>
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
            </Container>
        </nav>
    )
}
