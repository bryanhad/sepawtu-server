import { useEffect } from "react"
import Container from "../components/Container"
import Table from "../components/Table"
import TitlePage from "../components/TitlePage"
import { useDispatch, useSelector } from "react-redux"
import ProductAction from "../store/actions/ProductAction"

export default function Products() {
    const dispatch = useDispatch()
    const product = useSelector((store) => store.product)
    console.log(product)
    useEffect(() => {
        dispatch(ProductAction.fetchAll())
    }, [dispatch])

    return (
        <>
            <Container>
                <TitlePage>Products</TitlePage>
            </Container>
            <Container className="flex-[1]">
                <Table
                    tHeads={["id", "name", "price", "gender"]}
                    dataArr={[]}
                ></Table>
            </Container>
        </>
    )
}
