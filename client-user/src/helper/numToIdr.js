export default function numToIdr(numPrice) {
    return numPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
}