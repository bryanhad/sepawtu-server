import GenderList from "./GenderList";
import NewProductShowCase from "./NewProductShowCase";
import TrendingStyles from "./TrendingStyles";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full">
        <TrendingStyles/>
        <NewProductShowCase/>
        <GenderList/>
    </div>
  )
}
