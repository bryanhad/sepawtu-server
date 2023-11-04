import numToIdr from "../../helper/numToIdr"
import Button from "../Button"

export default function ProductRow({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>
                <div className="w-[80px] h-[80px]">
                    <img
                        src={product.mainImg}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </td>
            <td className="max-w-[150px] truncate">{product.name}</td>
            <td>{numToIdr(product.price)}</td>
            <td>
                <div className="flex flex-col gap-2">
                    <span className="flex gap-2">
                        <p>Style: </p>
                        <p>{product.Style.name}</p>
                    </span>
                    <span className="flex gap-2">
                        <p>Gender: </p>
                        <p>{product.gender}</p>
                    </span>
                </div>
            </td>
            <td>
                <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-slate-100">
                        <img
                            src={product.User.profilePicture}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-sm">
                        <p className="max-w-[150px] truncate">{product.User.username}</p>
                        <p className="max-w-[150px] truncate">
                            {product.User.email}
                        </p>
                    </div>
                </div>
            </td>
            <td></td>
            <td>
                <div className="flex gap-2">
                    <Button color="primary" className="px-4 py-2">
                        DETAIL
                    </Button>
                    <Button color="danger" className="px-4 py-2">
                        DELETE
                    </Button>
                </div>
            </td>
        </tr>
    )
}
