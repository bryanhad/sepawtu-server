import { BiSolidRightArrow } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function TrendingStyles() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:3000/categories")
                const data = await res.json()
                setCategories(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCategories()
    }, [])

    return (
        <div className="flex flex-col">
            <section>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl">Trending Styles</h1>
                    <Link
                        to="categories"
                        className="flex gap-2 items-center font-semibold max-w-max py-2 pr-2"
                    >
                        <BiSolidRightArrow />
                        <p>See all of our shoes!</p>
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4">
                    {categories.map((category, i) => (
                        <Link
                            key={i}
                            className="flex flex-col max-w-max justify-self-center hover:translate-y-[-5px] duration-150 ease-in-out pt-[50px]"
                        >
                            <div className="max-w-[300px] max-h-[200px] grid place-content-center overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={category.mainImg}
                                    alt={`image of '${category.name}' shoe`}
                                />
                            </div>
                            <h3 className="pl-4 py-4 font-extrabold text-xl">
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
