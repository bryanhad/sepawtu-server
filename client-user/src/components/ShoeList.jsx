import ShoeCard from "./ShoeCard"

export default function ShoeList({shoeArr}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shoeArr.map(shoe => (
            <ShoeCard shoe={shoe} key={shoe.id} />
        ))}
    </div>
  )
}
