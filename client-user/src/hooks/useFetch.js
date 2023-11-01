import { useCallback, useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        setIsLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(err)
            } finally {
                setIsLoading(false)
            }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        data, isLoading, error, fetchData
    }
}