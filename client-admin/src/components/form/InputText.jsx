import Label from "./Label";

export default function InputText({
    label,
    id,
    value,
    onChange,
    placeholder,
    required,
}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id} required={required}>{label}</Label>
            <div className="flex gap-3 px-4 py-3 text-slate-500 relative items-center border border-gray-300 rounded-md">
                <input
                    id={id}
                    name={id}
                    onChange={(e) => onChange(e)}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    className="flex-[1]"
                />
            </div>
        </div>
    )
}
