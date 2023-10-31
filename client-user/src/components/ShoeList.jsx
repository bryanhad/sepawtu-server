import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ShoeCard from "./ShoeCard"

export default function ShoeList() {
    const {gender} = useParams()
    let genderId
    switch (gender) {
        case 'men': genderId = 1; break 
        case 'women': genderId = 2; break
        case 'kids': genderId = 3; break
        default: break
    }
   
    const {data: shoes} = useFetch(`http://localhost:3000/products?genderId=${genderId}`)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shoes.map(shoe => (
                <ShoeCard shoe={shoe} key={shoe.id} />
            ))}
        </div>
    )
}
