import kidsShoe from "../assets/shoe-kids.png"
import menShoe from "../assets/shoe-men.png"
import womenShoe from "../assets/shoe-women.png"
import { IoIosStarOutline } from "react-icons/io"
import { LiaAngleDoubleRightSolid } from "react-icons/lia"

export default function StarBanner(props) {
    const banners = [
        {
            id: 1,
            name: "men",
            title: `Men's Shoes`,
            color: "bg-slate-400",
            mainImg: menShoe,
        },
        {
            id: 2,
            name: "women",
            title: `Women's Shoes`,
            color: "bg-pink-300",
            mainImg: womenShoe,
        },
        {
            id: 3,
            name: "kids",
            title: `Kid's Shoes`,
            color: "bg-violet-300",
            mainImg: kidsShoe,
        },
    ]

    const banner = banners.find((banner) => banner.name === props.for)

    return (
        <div className={`${banner.color} h-[200px] relative overflow-hidden`}>
            <div className="max-lg:left-[50%] max-lg:translate-x-[-100%]  absolute left-[100px] top-[50%] translate-y-[-50%]">
                <LiaAngleDoubleRightSolid className="absolute text-[400px] top-[50%] translate-y-[-50%] text-black/10" />
                <IoIosStarOutline className="text-[150px] text-black/10 rotate-[20deg]" />
            </div>
            <h1 className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white  text-3xl text-center">
                {banner.title}
            </h1>
            <img
                src={banner.mainImg}
                className="hidden lg:block rotate-[-25deg] absolute right-[100px] top-[50%] translate-y-[-70%] scale-75 origin-center"
                style={{
                    filter: "drop-shadow(-20px 20px 0px rgba(0,0,0,0.5))",
                }}
                alt=""
            />
        </div>
    )
}
