import { useLocation } from "react-router-dom"
import Container from "../components/Container"
import ShoeList from "../components/ShoeList"
import StarBanner from "../components/StarBanner"
import useFetch from "../hooks/useFetch"

export default function GenderPage() {
    const param = useLocation()
    let genderId

    switch (param.pathname) {
        case '/men': genderId = 1; break 
        case '/women': genderId = 2; break
        case '/kids': genderId = 3; break
        default: break
    }
    const {data} = useFetch(`http://localhost:3000/products?genderId=${genderId}`)
    return (
        <div className="w-full flex flex-col gap-6">
            <StarBanner for={param.pathname.substring(1)} />
            <Container>
                <ShoeList shoeArr={data}/>
            </Container>
        </div>
    )
}
