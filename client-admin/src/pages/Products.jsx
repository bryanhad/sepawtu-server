import Container from "../components/Container";
import TitlePage from "../components/TitlePage";

export default function Products() {
  return (
    <>
        <Container>
            <TitlePage>Products</TitlePage>
        </Container>
        <Container className='flex-[1]'/>
    </>
  )
}
