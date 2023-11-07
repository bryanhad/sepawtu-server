export default function InputWithIcon({
    icon,
    name,
    required,
    className,
    placeholder,
    onChange,
    type
}) {
    return (
        <div
            className={`flex relative items-center gap-3 border-b border-slate-300 py-2 text-slate-600 ${className}`}
        >
            <label htmlFor={name} className="">
                {icon}
            </label>
            {required && (
                <span className="text-red-500 absolute right-0 top-0">*</span>
            )}
            <input
                type={type}
                className="w-full"
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}
