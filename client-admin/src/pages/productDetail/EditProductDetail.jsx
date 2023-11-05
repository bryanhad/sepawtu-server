import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import ProductAction from "../../store/actions/ProductAction"
import InputText from "../../components/form/InputText"
import InputPrice from "../../components/form/InputPrice"
import InputOptions from "../../components/form/InputOptions"

export default function EditProductDetail({ toggleIsEditing }) {
    const dispatch = useDispatch()
    const { shoeDetail, styles, genders } = useSelector((store) => store.product)
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
                                <InputOptions
                                    key={i}
                                    id={key}
                                    label={"Style"}
                                    defaultValue={form[key]}
                                    onChange={handleChange}
                                    optionsArr={styles}
                                />
                            )
                        case "gender":
                            return (
                                <InputOptions
                                    key={i}
                                    id={key}
                                    label={"Gender"}
                                    defaultValue={form[key]}
                                    onChange={handleChange}
                                    optionsArr={genders}
                                />
                            )
                        case "price":
                            return (
                                <InputPrice
                                    key={i}
                                    id={key}
                                    label="Price"
                                    onChange={handleChange}
                                    value={form[key]}
                                />
                            )
                        default:
                            return (
                                <InputText
                                    key={i}
                                    id={key}
                                    label={key}
                                    onChange={handleChange}
                                    value={form[key]}
                                />
                            )
                    }
                })}
            </div>
            <div className="flex gap-4 mt-4">
                <Button type="submit" color="success" className="w-full ">
                    SUBMIT
                </Button>
                <Button onClick={toggleIsEditing} className="w-full py-3">
                    CANCEL
                </Button>
            </div>
        </form>
    )
}
