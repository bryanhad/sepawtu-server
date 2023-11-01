import { IoHeartOutline } from "react-icons/io5"

export default function WishListButton() {
    return (
        <button className="p-4 text-xl rounded-full border border-black group hover:bg-pink-300 duration-300 hover:border-white hover:scale-[110%]">
            <IoHeartOutline className="group-hover:text-white duration-300"/>
        </button>
    )
}
