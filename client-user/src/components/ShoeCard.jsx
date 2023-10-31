import { Link } from "react-router-dom"
import numToIdr from "../helper/numToIdr"

export default function ShoeCard({ shoe }) {
    return (
        <Link
            to={shoe.slug}
            className="flex flex-col max-w-[250px] place-self-center h-full shadow-sm"
        >
            <div className="min-h-[300px] flex items-center bg-grayBackground">
                <img src={shoe.mainImg} alt={`image of ${shoe.name}`} />

            </div>
            <div className="pb-6 flex-[1] flex flex-col gap-3">
                <h4 className="flex-[1] text-sm">{shoe.name}</h4>
                <p>{numToIdr(shoe.price)}</p>
            </div>
        </Link>
    )
}
