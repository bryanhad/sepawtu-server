import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import ProductAction from "../../store/actions/ProductAction"

export default function EditProductDetail({toggleIsEditing}) {
    const dispatch = useDispatch()
    const { shoeDetail, styles } = useSelector((store) => store.product)
    const [form, setForm] = useState({})

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

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(ProductAction.editById(shoeDetail.id, form))
        toggleIsEditing()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
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
                                            <option
                                                key={style.id}
                                                value={style.id}
                                            >
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
            <div className="flex gap-4 mt-4">
                <Button type='submit' color="success" className="w-full ">
                    SUBMIT
                </Button>
                <Button
                    onClick={toggleIsEditing}
                    className="w-full py-3"
                >
                    CANCEL
                </Button>
            </div>
        </form>
    )
}
