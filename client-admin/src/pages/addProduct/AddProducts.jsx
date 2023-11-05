import { useEffect, useState } from "react"
import Container from "../../components/Container"
import TitlePage from "../../components/TitlePage"
import InputText from "../../components/form/InputText"
import InputPrice from "../../components/form/InputPrice"
import InputOptions from "../../components/form/InputOptions"
import { useDispatch, useSelector } from "react-redux"
import ProductAction from "../../store/actions/ProductAction"
import InputImages from "./InputImages"

export default function AddProducts() {
    const { genders, styles } = useSelector((store) => store.product)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: 0,
        gender: "men",
        styleId: 1,
        mainImg: "",
        images: []
    })

    useEffect(() => {
        dispatch(ProductAction.fetchAllStyles())
    }, [dispatch])

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
        console.log(form)
    }

    const formInputs = [
        {
            id: "name",
            label: `Product's Name`,
            placeholder: `Enter product's name`,
            type: "text",
        },
        {
            id: "description",
            label: `Product's Description`,
            placeholder: `Enter product's descripton`,
            type: "textArea",
        },
        {
            id: "price",
            label: `Product's Price`,
            placeholder: `Enter product's price`,
            type: "number",
        },
        {
            id: "gender",
            label: "Who is this product for?",
            type: "select",
            options: genders,
            defaultValue: form.gender,
        },
        {
            id: "styleId",
            label: `Select Product's style`,
            type: "select",
            options: styles,
            defaultValue: form.styleId,
        },
    ]
    return (
        <>
            <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-2">
                <TitlePage className="text-center">Add Product</TitlePage>
            </Container>
            <Container className="flex-[1]">
                <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        {formInputs.map((input) => {
                            switch (input.type) {
                                case "text":
                                    return (
                                        <InputText
                                            key={input.id}
                                            id={input.id}
                                            label={input.label}
                                            placeholder={input.placeholder}
                                            onChange={handleChange}
                                            value={form[input.id]}
                                            required={true}
                                        />
                                    )
                                case "textArea":
                                    return (
                                        <InputText
                                            key={input.id}
                                            id={input.id}
                                            label={input.label}
                                            placeholder={input.placeholder}
                                            onChange={handleChange}
                                            value={form[input.id]}
                                            required={true}
                                        />
                                    )
                                case "number":
                                    return (
                                        <InputPrice
                                            key={input.id}
                                            id={input.id}
                                            label={input.label}
                                            placeholder={input.placeholder}
                                            onChange={handleChange}
                                            value={form[input.id]}
                                            required={true}
                                        />
                                    )
                                case "select":
                                    return (
                                        <InputOptions
                                            key={input.id}
                                            id={input.id}
                                            label={input.label}
                                            onChange={handleChange}
                                            optionsArr={input.options}
                                            defaultValue={input.defaultValue}
                                            required={true}
                                        />
                                    )
                            }
                        })}
                    </div>
                    <InputImages onChange={handleChange} setForm={setForm} form={form}/>
                </form>
            </Container>
        </>
    )
}
