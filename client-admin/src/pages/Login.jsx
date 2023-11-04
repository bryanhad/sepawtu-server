import Container from "../components/Container"
import InputWithIcon from "../components/form/InputWithIcon"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { LiaKeySolid } from "react-icons/lia"
import { useState } from "react"
import Button from "../components/Button"
import UserAction from "../store/actions/userAction"
import { useDispatch, useSelector } from "react-redux"
import useError from "../hooks/useError"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {info} = useSelector(store => store.user)
    const {errorShake, isValid, errorMessage, showError} = useError()

    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    console.log(info)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (!form.email || !form.password) {
                throw {message: 'Please insert both email and password'}
            }
            dispatch(await UserAction.login(form))
            navigate('/')
        } catch (err) {
            showError(err.message)
        }
    }

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <Container
            noPadding={true}
            className="max-w-[75%] w-full h-[75vh] flex relative mx-6"
        >
            <section className="flex-[1] text-slate-700 p-6 ">
                <h1 className="text-4xl font-extrabold text-center mt-[80px]">
                    Log In
                </h1>
                <form
                    className="mt-4 flex flex-col gap-4 items-center"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <InputWithIcon
                        icon={<MdOutlineAlternateEmail />}
                        name="email"
                        required={true}
                        className="w-full"
                        placeholder="Insert your email..."
                        onChange={(e) => handleChange(e)}
                    />
                    <InputWithIcon
                        icon={<LiaKeySolid />}
                        name="password"
                        required={true}
                        className="w-full"
                        placeholder="Insert your password..."
                        onChange={(e) => handleChange(e)}
                    />
                    {!isValid && (
                        <p
                            className={`text-red-500 text-center ${
                                errorShake ? "errorShake" : ""
                            }`}
                        >
                            {errorMessage}
                        </p>
                    )}
                    <Button
                        type="submit"
                        color="primary"
                        className="px-6 py-2 w-full"
                    >
                        Login
                    </Button>
                </form>
            </section>
            <section className="flex-[1] hidden md:block relative">
                <img
                    src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D"
                    className="w-full h-full object-cover opacity-[80%]"
                    alt="thumbnail of login page"
                />
                <h1 className="absolute top-[20%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[4vw] font-bold converse-font text-slate-600">
                    Sepawtu
                </h1>
            </section>
        </Container>
    )
}
