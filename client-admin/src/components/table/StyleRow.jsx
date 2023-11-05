import { Link } from "react-router-dom"
import Button from "../Button"
import { useDispatch } from "react-redux"
import showStyleDeleteAlert from "../../helper/showStyleDeleteAlert"

export default function StyleRow({ style }) {
    const dispatch = useDispatch()
    function handleDelete(id, name) {
        showStyleDeleteAlert(id, name, dispatch)
    }

    return (
        <tr>
            <td>{style.id}</td>
            <td className="max-w-[150px] truncate">{style.name}</td>
            <td>
                <div className="flex gap-2">
                    <Link
                        className="px-4 py-2 text-white bg-sky-400 rounded-md"
                        to={`/products/${style.id}`}
                    >
                        DETAIL
                    </Link>
                    <Button
                        onClick={() =>
                            handleDelete(
                                style.id,
                                style.name,
                            )
                        }
                        color="danger"
                        className="px-4 py-2"
                    >
                        DELETE
                    </Button>
                </div>
            </td>
        </tr>
    )
}
