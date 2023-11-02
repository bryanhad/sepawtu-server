import { useParams } from "react-router-dom"
import ShoeCard from "./ShoeCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ProductsAction from "../store/actions/products/actionCreator"

export default function ShoeList() {
    const { gender } = useParams()
    const dispatch = useDispatch()
    const { shoesFiltered, currentPage, totalPages } = useSelector(
        (store) => store.products
    )

    useEffect(() => {
        dispatch(ProductsAction.fetchShoes({ gender, page: currentPage }))
    }, [dispatch, gender, currentPage])

    function handleNext() {
        if (totalPages === 1) return
        const nextPage = currentPage + 1 > totalPages ? 1 : currentPage + 1
        dispatch(ProductsAction.fetchShoes({ gender, page: nextPage }))
    }
    function handlePrev() {
        if (totalPages === 1) return
        const prevPage = currentPage - 1 < 1 ? totalPages : currentPage - 1
        dispatch(ProductsAction.fetchShoes({ gender, page: prevPage }))
    }

    return (
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <button
                    onClick={handlePrev}
                    className="py-2 bg-black text-white px-8"
                >
                    prev
                </button>
                <p>
                    {currentPage}/{totalPages}
                </p>
                <button
                    onClick={handleNext}
                    className="py-2 bg-black text-white px-8"
                >
                    next
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {shoesFiltered.map((shoe) => (
                    <ShoeCard shoe={shoe} key={shoe.id} />
                ))}
            </div>
        </div>
    )
}
