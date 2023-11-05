import { useEffect, useState } from "react"
import Container from "../../components/Container"
import TitlePage from "../../components/TitlePage"
import { useDispatch, useSelector } from "react-redux"
import ProductAction from "../../store/actions/ProductAction"
import InputImages from "./InputImages"
import RegularInputs from "./RegularInputs"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

export default function AddProducts() {
    const navigate = useNavigate()
    const { genders, styles } = useSelector((store) => store.product)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: 0,
        gender: "men",
        styleId: 1,
        mainImg: "",
        images: [],
    })

    const [errors, setErrors] = useState([])

    useEffect(() => {
        dispatch(ProductAction.fetchAllStyles())
    }, [dispatch])

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            dispatch(await ProductAction.addNew(form))
            navigate('/')
        } catch (err) {
            if (Array.isArray(err)) {
                setErrors(err)
            }
        }
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
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RegularInputs
                            formInputs={formInputs}
                            form={form}
                            handleChange={handleChange}
                            errors={errors}
                        />
                        <InputImages
                            onChange={handleChange}
                            setForm={setForm}
                            form={form}
                            error={errors?.find(err => err.inputName === 'mainImg')}
                        />
                    </div>
                    <Button
                        className="w-full py-2 mt-4"
                        color="success"
                        type="submit"
                    >
                        SUBMIT
                    </Button>
                </form>
            </Container>
        </>
    )
}
