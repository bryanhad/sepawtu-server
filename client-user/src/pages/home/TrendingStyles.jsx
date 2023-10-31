import { BiSolidRightArrow } from "react-icons/bi"
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

export default function TrendingStyles() {
    const {data: styles} = useFetch('http://localhost:3000/styles')

    return (
        <div className="flex flex-col">
            <section>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl">Trending Styles</h1>
                    <Link
                        to="styles"
                        className="flex gap-2 items-center font-semibold max-w-max py-2 pr-2"
                    >
                        <BiSolidRightArrow />
                        <p>See all of our shoes!</p>
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4">
                    {styles.map((style, i) => (
                        <Link
                            key={i}
                            className="flex flex-col max-w-max justify-self-center hover:translate-y-[-5px] duration-150 ease-in-out pt-[50px]"
                        >
                            <div className="max-w-[300px] max-h-[200px] grid place-content-center overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={style.mainImg}
                                    alt={`image of '${style.name}' shoe`}
                                />
                            </div>
                            <h3 className="pl-4 py-4 font-extrabold text-xl converse-font">
                                {style.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
