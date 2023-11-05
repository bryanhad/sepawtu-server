export default function Label({ htmlFor, required, children }) {
    return (
        <label className="relative max-w-max text-slate-600" htmlFor={htmlFor}>
            {children}
            {required && (
                <p className="absolute top-0 right-0 translate-x-[200%] text-red-500">*</p>
            )}
        </label>
    )
}
