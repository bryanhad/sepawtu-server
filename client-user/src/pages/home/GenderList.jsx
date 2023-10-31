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
        <div className="flex flex-col md:flex-row justify-evenly gap-2">
            {genders.map((gender, i) => (
                <Link
                    key={i}
                    to={gender.name}
                    className="justify-self-center hover:translate-y-[-5px] duration-150 ease-in-out relative"
                >
                    <div className="w-full md:max-w-[300px] max-md:max-h-[150px] grid place-content-center overflow-hidden rounded-xl">
                        <img
                            className="w-full h-full max-md:pt-[50vw] object-cover"
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
