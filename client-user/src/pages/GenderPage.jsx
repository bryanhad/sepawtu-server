import { useParams } from "react-router-dom"
import Container from "../components/Container"
import ShoeList from "../components/ShoeList"
import StarBanner from "../components/StarBanner"

export default function GenderPage() {
    const {gender} = useParams()

    return (
        <div className="w-full flex flex-col gap-6">
            <StarBanner for={gender} />
            <Container>
                <ShoeList/>
            </Container>
        </div>
    )
}
