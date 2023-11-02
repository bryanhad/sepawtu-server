import { GiConverseShoe } from "react-icons/gi"
import { Link, NavLink } from "react-router-dom"
import { GrMenu } from "react-icons/gr"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import Container from "./Container"
import { useSelector } from "react-redux"
import capitalizeFirstLetter from "../helper/capitalizeFirstLetter"

export default function Navbar({ className }) {
    const genders = ["men", "women", "kids"]
    const { styles } = useSelector((state) => state.categories)
    const [navOpen, setNavOpen] = useState(false)

    return (
        <nav
            className={`w-full h-[75px] flex items-center px-2 ${className} shadow-md bg-white`}
        >
            <Container className={`flex justify-between`}>
                <div className="flex">
                    <Link
                        to="/"
                        className="flex text-3xl items-center font-extrabold"
                    >
                        <h1>Sepawtu</h1>
                        <GiConverseShoe className="pt-2" />
                    </Link>
                    <div className="hidden md:flex ml-6 gap-4 font-semibold">
                        {genders.map((gender, i) => (
                            <NavLink
                                to={gender}
                                className="flex items-end"
                                key={i}
                            >
                                <p>{capitalizeFirstLetter(gender)}</p>
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
                    className={`fixed h-full top-0 min-w-[60%] shadow-md pt-[80px] p-4 bg-white text-end flex flex-col gap-4 md:hidden ${
                        !navOpen
                            ? "right-0 translate-x-[100%] duration-300 ease-in-out"
                            : "right-0 translate-x-[0%] duration-300 ease-in-out"
                    }`}
                >
                    <div>
                        <h5 className="font-semibold converse-font">Styles</h5>
                        <div className="flex flex-col gap-2 items-end mt-2">
                            {styles.map((style) => {
                                const endpoint = style.name
                                    .toLowerCase()
                                    .split(" ")
                                const to =
                                    endpoint.length >= 2
                                        ? endpoint.join("-")
                                        : endpoint[0]
                                return (
                                    <NavLink
                                        to={to}
                                        key={style.id}
                                        className="max-w-max"
                                    >
                                        <p>
                                            {capitalizeFirstLetter(style.name)}
                                        </p>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-semibold converse-font">Genders</h5>
                        <div className="flex flex-col gap-2 items-end mt-2">
                            {genders.map((gender, i) => (
                                <NavLink
                                    to={gender}
                                    key={i}
                                    className="max-w-max"
                                >
                                    <p>bruh</p>
                                    <p>{capitalizeFirstLetter(gender)}</p>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>
            </Container>
        </nav>
    )
}
