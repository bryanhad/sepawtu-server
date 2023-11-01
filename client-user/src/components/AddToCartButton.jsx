import { BsCart2 } from "react-icons/bs"

export default function AddToCartButton({className}) {
    return (
        <button id="addToCartButton" className={`w-full group flex group items-center border border-black ${className}`}>
            <p className="p-4 leading-none flex-[1]">Add to Cart</p>
            <div className="p-4 bg-black text-white">
                <BsCart2 />
            </div>
        </button>
    )
}
