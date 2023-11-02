function arrayToFormattedString(arr) {
    const formattedArray = arr.map((str, i) => {
        if (i === arr.length - 1) {
            return "and " + str
        } else {
            return str
        }
    })
    
    if (formattedArray.length > 2) {
        const string = formattedArray.join(', ')
        return string
    }
    return formattedArray.join(' ')
}

module.exports = arrayToFormattedString