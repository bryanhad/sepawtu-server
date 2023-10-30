import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GenderList() {
    const [genders, setGenders] = useState([])

    useEffect(() => {
        const fetchGenders = async () => {
            try {
                const res = await fetch("http://localhost:3000/genders")
                const data = await res.json()
                setGenders(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchGenders()
    }, [])

    return (
        <div className="grid sm:grid-cols-3 px-4 gap-4">
            {genders.map((gender, i) => (
                <Link
                    key={i}
                    className="flex flex-col max-w-max justify-self-center hover:translate-y-[-5px] duration-150 ease-in-out relative"
                >
                    <div className="w-full max-h-[200px] grid place-content-center overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={gender.mainImg}
                            alt={`image of '${gender.name}' model`}
                        />
                    </div>
                    <p className="absolute p-3 text-white bg-black bottom-0 right-0">
                        Shop for {gender.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}
