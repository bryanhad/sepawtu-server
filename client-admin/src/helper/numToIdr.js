export default function numToIdr(num) {
    return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
}