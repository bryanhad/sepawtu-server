export default function getFormDataObj(e) {
    const data = new FormData(e.target)
    const formDataObj = {}
    data.forEach((value, key) => (formDataObj[key] = value))

    return formDataObj
}