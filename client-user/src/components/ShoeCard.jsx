import { Link } from "react-router-dom"
import numToIdr from "../helper/numToIdr"
import { IoHeartOutline } from "react-icons/io5"

export default function ShoeCard({ shoe }) {
    return (
        <div className="relative max-w-[250px] place-self-center shadow-sm">
            <button className="absolute top-2 right-2 text-xl z-[10] p-2 hover:text-pink-400 hover:scale-[110%] duration-150">
                <IoHeartOutline/>
            </button>
            <Link
                to={shoe.slug}
                className="flex flex-col h-full relative z-[5]"
            >
                <div className="min-h-[300px] flex items-center bg-grayBackground">
                    <img src={shoe.mainImg} alt={`image of ${shoe.name}`} />
                </div>
                <div className="pb-6 flex-[1] flex flex-col gap-3">
                    <h4 className="flex-[1] text-sm">{shoe.name}</h4>
                    <p>{numToIdr(shoe.price)}</p>
                </div>
            </Link>
        </div>
    )
}
