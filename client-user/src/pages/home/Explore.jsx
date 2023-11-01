import { Link } from "react-router-dom"
import { BiRightArrowAlt } from "react-icons/bi"

export default function Explore({className}) {
    const links = [
        { id: 1, name: `All Women's`, to: "women" },
        { id: 2, name: `All Men's`, to: "men" },
        { id: 3, name: `All Kid's`, to: "kids" },
        { id: 4, name: `All Accecories`, to: "accecories" },
    ]

    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            <h1 className="text-4xl font-semibold text-center lg:text-start">Explore Sepawtu</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {links.map((link) => (
                    <div key={link.id}>
                        <Link
                            to={link.to}
                            className={`w-full px-5 py-12 bg-white font-semibold hover-turn-black border-black ${
                                link.id < links.length
                                    ? "lg:border-r-[1px]"
                                    : ""
                            } ${link.id % 2 !== 0 ? 'md:border-r-[1px]' : ''}`}
                        >
                            <span className="flex items-center gap-3">
                            <BiRightArrowAlt className="text-3xl"/>
                            <p className="text-xl">{link.name}</p>
                            
                            </span>
                        </Link>
                        <div className="md:hidden border max-w-[75%] w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
