import Container from "../../components/Container";
import Explore from "./Explore";
import GenderList from "./GenderList";
import NewProductShowCase from "./NewProductShowCase";
import TrendingStyles from "./TrendingStyles";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full">
        <Container>
            <TrendingStyles/>
        </Container>
        <NewProductShowCase/>
        <Container>
            <GenderList/>
        </Container>
        <Container>
            <Explore/>
        </Container>
    </div>
  )
}
