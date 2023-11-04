import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function EditProductDetail() {
    const { shoeDetail, styles } = useSelector((store) => store.product)
    const [form, setForm] = useState({})
    console.log(styles)

    useEffect(() => {
        if (shoeDetail) {
            setForm({
                name: shoeDetail.name,
                description: shoeDetail.description,
                price: shoeDetail.price,
                gender: shoeDetail.gender,
                styleId: shoeDetail.styleId,
            })
        }
    }, [shoeDetail])

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
        console.log(form)
    }

    return (
        <div className="flex flex-col">
            {Object.keys(form).map((key, i) => {
                switch (key) {
                    case "styleId":
                        return (
                            <div key={i} className="flex flex-col gap-2">
                                <label htmlFor="style">Style</label>
                                <select
                                    id="style"
                                    name={key}
                                    className="select select-bordered w-full max-w-xs"
                                    defaultValue={form[key]}
                                    onChange={(e) => handleChange(e)}       
                                >
                                    {styles.map((style) => (
                                        <option key={style.id} value={style.id}>
                                            {style.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )
                    case "gender":
                        return (
                            <div key={i} className="flex flex-col gap-2">
                                <label htmlFor="style">Gender</label>
                                <select
                                    id="style"
                                    name={key}
                                    className="select select-bordered w-full max-w-xs"
                                    defaultValue={form[key]}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {["Men", "Women", "Kids"].map(
                                        (gender, i) => (
                                            <option
                                                key={i}
                                                value={gender.toLowerCase()}
                                            >
                                                {gender}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                        )
                    case "price":
                        return (
                            <div key={i} className="flex flex-col gap-2">
                                <label htmlFor="style">Price</label>
                                <input
                                    name={key}
                                    value={form[key]}
                                    type="number"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        )
                    default:
                        return (
                            <div key={i} className="flex flex-col">
                                <label htmlFor={key}>{key}</label>
                                <input
                                    name={key}
                                    onChange={(e) => handleChange(e)}
                                    value={form[key]}
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        )
                }
            })}
        </div>
    )
}
