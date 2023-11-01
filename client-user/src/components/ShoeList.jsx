import { useParams } from "react-router-dom"
import ShoeCard from "./ShoeCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ProductsAction from "../store/actions/products/actionCreator"

export default function ShoeList() {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products)
    const {gender} = useParams()

    useEffect(() => {
        dispatch(ProductsAction.fetchShoesByGender(gender))
    }, [dispatch, gender])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.shoesFiltered.map(shoe => (
                <ShoeCard shoe={shoe} key={shoe.id} />
            ))}
        </div>
    )
}
