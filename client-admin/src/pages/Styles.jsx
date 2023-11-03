import Container from "../components/Container"
import TitlePage from "../components/TitlePage"

export default function Styles() {
    return (
        <>
            <Container>
                <TitlePage>Styles</TitlePage>
            </Container>
            <Container className="flex-[1]" />
        </>
    )
}
