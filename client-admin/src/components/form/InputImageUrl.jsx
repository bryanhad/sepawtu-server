import { BiImage } from "react-icons/bi"

export default function InputImageUrl({ id, onChange, required }) {
    return (
        <div className="flex gap-3 px-4 py-3 text-slate-500 relative items-center border border-gray-300 rounded-md flex-[1]">
            <label htmlFor={id}>
                <BiImage className="text-xl" />
            </label>
            <input
                id={id}
                name={id}
                type="text"
                placeholder="https://....jpg"
                className="flex-[1]"
                onChange={(e) => onChange(e)}
            />
            {required && (
                <span className="absolute top-2 right-2 text-red-500">*</span>
            )}
        </div>
    )
}
