import Label from "./Label";

export default function InputOptions({label, id, defaultValue, onChange, optionsArr, required}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id} required={required}>{label}</Label>
            <select
                id={id}
                name={id}
                className="select select-bordered w-full"
                defaultValue={defaultValue}
                onChange={(e) => onChange(e)}
            >
                {optionsArr.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
