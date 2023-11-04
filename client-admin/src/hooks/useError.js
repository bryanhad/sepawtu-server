import { useState } from "react"

export default function useError() {
    const [errorShake, setErrorShake] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    function showError(errMsg) {
        setIsValid(false)
        setErrorMessage(errMsg)
        setErrorShake(true)
        setTimeout(() => {
            setErrorShake(false)
        }, 200)
    }

    return {errorShake, isValid, errorMessage, showError}
}