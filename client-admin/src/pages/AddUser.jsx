import { useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import TitlePage from "../components/TitlePage"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Label from "../components/form/Label"
import UserAction from "../store/actions/userAction"

export default function AddUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    })

    function handleChange(e) {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            dispatch(await UserAction.register(form))
            navigate("/users")
        } catch (err) {
            console.log(err)
            if (Array.isArray(err)) {
                setErrors(err)
            }
        }
    }

    const formInputs = [
        {
            id: "username",
            label: `Username`,
            placeholder: `Enter user's username`,
            type: "text",
        },
        {
            id: "email",
            label: `User's email`,
            placeholder: `Enter user's email`,
            type: "text",
        },
        {
            id: "password",
            label: `User's Password`,
            placeholder: `Enter user's password`,
            type: "password",
        },
        {
            id: "phoneNumber",
            label: `User's phone number`,
            placeholder: `Enter user's phone number`,
            type: "text",
        },
        {
            id: "address",
            label: `User's address`,
            placeholder: `Enter user's address`,
            type: "text",
        },
    ]

    return (
        <>
            <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-2">
                <TitlePage className="text-center">Add User</TitlePage>
            </Container>
            <Container className="flex-[1]">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col gap-4">
                        {formInputs.map((input, i) => (
                            <>
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor={input.id}
                                        required={input.required}
                                    >
                                        {input.label}
                                    </Label>
                                    <div className="flex gap-3 px-4 py-3 text-slate-500 relative items-center border border-gray-300 rounded-md">
                                        <input
                                            id={input.id}
                                            name={input.id}
                                            onChange={(e) => handleChange(e)}
                                            value={form[input.id]}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            className="flex-[1]"
                                        />
                                    </div>
                                </div>
                                {errors.find(
                                    (err) => err.inputName === input.id
                                ) && (
                                    <p key={i} className="text-error text-sm">
                                        {
                                            errors.find(
                                                (err) =>
                                                    err.inputName === input.id
                                            ).message
                                        }
                                    </p>
                                )}
                            </>
                        ))}
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
