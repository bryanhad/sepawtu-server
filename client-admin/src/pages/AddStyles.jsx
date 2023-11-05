import { useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import TitlePage from "../components/TitlePage"
import InputText from "../components/form/InputText"
import Label from "../components/form/Label"
import InputImageUrl from "../components/form/InputImageUrl"
import ProductAction from "../store/actions/ProductAction"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function AddStyles() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])

    const [form, setForm] = useState({
        name: "",
        mainImg: "",
    })

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            dispatch(await ProductAction.addNewStyle(form))
            navigate("/styles")
        } catch (err) {
            console.log(err)
            if (Array.isArray(err)) {
                setErrors(err)
            }
        }
    }

    return (
        <>
            <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-2">
                <TitlePage className="text-center">Add Style</TitlePage>
            </Container>
            <Container className="flex-[1]">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <InputText
                                id="name"
                                label="Style name"
                                placeholder="Please enter style name"
                                onChange={handleChange}
                                value={form.name}
                                required={true}
                            />
                            {errors.find((err) => err.inputName === "name") && (
                                <p className="text-error">
                                    {
                                        errors.find(
                                            (err) => err.inputName === "name"
                                        ).message
                                    }
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="mainImg" required={true}>
                                    Style&apos;s thumbnail
                                </Label>
                                <InputImageUrl
                                    id="mainImg"
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.find(
                                (err) => err.inputName === "mainImg"
                            ) && (
                                <p className="text-error">
                                    {
                                        errors.find(
                                            (err) => err.inputName === "mainImg"
                                        ).message
                                    }
                                </p>
                            )}
                        </div>
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
