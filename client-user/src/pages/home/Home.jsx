import Container from "../../components/Container";
import GenderList from "./GenderList";
import NewProductShowCase from "./NewProductShowCase";
import TrendingStyles from "./TrendingStyles";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full">
        <Container>
            <TrendingStyles/>
        </Container>
        <NewProductShowCase/>
        <Container>
            <GenderList/>
        </Container>
    </div>
  )
}
