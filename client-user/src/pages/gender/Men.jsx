import Container from "../../components/Container"
import ShoeList from "../../components/ShoeList"
import StarBanner from "../../components/StarBanner"
import useFetch from "../../hooks/useFetch"

export default function Men() {
    const {data} = useFetch('http://localhost:3000/products?genderId=1')
    console.log(data)
    return (
        <div className="w-full flex flex-col">
            <StarBanner for="men" />
            <Container>
                <ShoeList shoeArr={data}/>
            </Container>
        </div>
    )
}
