import { Link } from "react-router-dom"
import Container from "../components/Container"
import TitlePage from "../components/TitlePage"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ProductAction from "../store/actions/ProductAction"
import Table from "../components/Table"
import StyleRow from "../components/table/StyleRow"

export default function Styles() {
    const dispatch = useDispatch()
    const {styles} = useSelector(store => store.product) 

    useEffect(() => {
        dispatch(ProductAction.fetchAllStyles())
    }, [dispatch])
    return (
        <>
            <Container>
                <TitlePage>Styles</TitlePage>
            </Container>
            <Container className="flex-[1] flex flex-col">
                <div className="flex gap-2">
                    <Link to='/styles/add' className="bg-emerald-400 text-white px-6 py-3 rounded-md">
                        ADD
                    </Link>
                </div>
                {styles?.length && (
                    <>
                        <Table
                            tHeads={[
                                "id",
                                "name",
                                "action"
                            ]}
                        >
                            {styles.map((style) => (
                                <StyleRow key={style.id} style={style} />
                            ))}
                        </Table>
                    </>
                )}
            </Container>
        </>
    )
}
