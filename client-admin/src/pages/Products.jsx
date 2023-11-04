import { useEffect } from "react"
import Container from "../components/Container"
import Table from "../components/Table"
import TitlePage from "../components/TitlePage"
import { useDispatch, useSelector } from "react-redux"
import ProductAction from "../store/actions/ProductAction"
import ProductRow from "../components/table/productRow"
import FilterSearch from "../components/table/FilterSearch"
import getFormDataObj from "../helper/getFormDataObj"
import Pagination from "../components/table/Pagination"
import { Link } from "react-router-dom"

export default function Products() {
    const dispatch = useDispatch()
    const { shoes } = useSelector((store) => store.product)
    console.log(shoes)

    useEffect(() => {
        dispatch(ProductAction.fetchAll({ size: 4, page: 1 }))
    }, [dispatch])

    function handleSearch(e) {
        e.preventDefault()
        const { name } = getFormDataObj(e)
        dispatch(ProductAction.fetchAll({ size: 4, page: 1, name }))
    }

    function goNext() {
        const nextPage =
            shoes.currentPage + 1 > shoes.totalPages ? 1 : shoes.currentPage + 1
        dispatch(ProductAction.fetchAll({ size: 4, page: nextPage }))
    }

    function goPrev() {
        const prevPage =
            shoes.currentPage - 1 < 1 ? shoes.totalPages : shoes.currentPage - 1
        dispatch(ProductAction.fetchAll({ size: 4, page: prevPage }))
    }

    return (
        <>
            <Container>
                <TitlePage>Products</TitlePage>
            </Container>
            <Container className="flex-[1] flex flex-col">
                <div className="flex gap-2">
                    <FilterSearch
                        placeholder={`Search for product's name`}
                        handler={handleSearch}
                    />
                    <Link to='/products/add' className="bg-emerald-400 text-white px-6 py-3 rounded-md">
                        ADD
                    </Link>
                </div>
                {shoes?.data?.length && (
                    <>
                        <Table
                            tHeads={[
                                "id",
                                "image",
                                "name",
                                "price",
                                "category",
                                "author",
                                "action",
                            ]}
                        >
                            {shoes.data.map((shoe) => (
                                <ProductRow key={shoe.id} product={shoe} />
                            ))}
                        </Table>
                        <Pagination
                            currentPage={shoes.currentPage}
                            totalPage={shoes.totalPages}
                            nextHandler={goNext}
                            prevHandler={goPrev}
                        />
                    </>
                )}
            </Container>
        </>
    )
}
